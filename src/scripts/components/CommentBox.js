'use strict';

var React = require('react/addons');
var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');

require('../../styles/CommentBox.css');


var CommentBox = React.createClass({
  render: function () {
    return (
        <div className="commentBox">
        	<h1>Comments</h1>
        	<CommentList data={this.props.data}/>
        	<CommentForm />
      </div>
      );
  }
});

module.exports = CommentBox;

