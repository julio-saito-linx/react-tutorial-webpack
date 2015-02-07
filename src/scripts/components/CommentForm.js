'use strict';

var React = require('react/addons');

require('../../styles/CommentForm.css');

var CommentForm = React.createClass({
  render: function () {
    return (
        <form className="CommentForm">
        	<input type="text" placeholder="Your name" />
        	<input type="text" placeholder="Say something..." />
        	<input type="submit" value="Post" />
      </form>
      );
  }
});

module.exports = CommentForm;

