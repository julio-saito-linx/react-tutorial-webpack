/**
 * This file provided by Facebook is for non-commercial testing and evaluation purposes only.
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var uuid = require('node-uuid');
var _ = require('lodash');

fs.exists('_comments.json', function (exists) {
  if (!exists) {
    fs.writeFile('_comments.json', JSON.stringify([], null, 4), function(err) {
      if (err) {
        throw err;
      }
    });
  }
});

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/comments.json', function(req, res) {
  fs.readFile('_comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.post('/comments.json', function(req, res) {
  fs.readFile('_comments.json', function(err, data) {
    var comments = JSON.parse(data);

    /* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.      DEBUG */
    var target = req.body;
    var depth  = 2; var inspectResult = require("util").inspect(target,
      { showHidden:!0, colors:!0, depth:depth });
    console.log("\n",
      ">>------------------------------------------------------\n",
      "  ##  req.body\n",
      "  ------------------------------------------------------\n",
      "  source: ( " + __filename + " )" + "\n",
      "  ------------------------------------------------------\n",
      "" + inspectResult + "\n",
      "<<------------------------------------------------------\n",
      "");
    /* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. /END-DEBUG */

    if (req.body.action === 'delete') {
      comments = _.reject(comments, function(comment) {
        return comment.id === req.body.id;
      });
    } else {
      req.body.id = uuid.v4();
      comments.push(req.body);
    }

    fs.writeFile('_comments.json', JSON.stringify(comments, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(comments));
    });
  });
});

app.listen(process.env.HTTP_PORT);

