'use strict';

var React = require('react/addons');

require('../../styles/CommentBox.css');

var CommentBox = React.createClass({
  render: function () {
    return (
        <div className="CommentBox">
        	Hello, world! I am a CommentBox.
      	</div>
      );
  }
});

module.exports = CommentBox;

