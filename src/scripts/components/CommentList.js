'use strict';

var React = require('react/addons');

require('../../styles/CommentList.css');

var CommentList = React.createClass({
  render: function () {
    return (
        <div className="commentList">
        	Hello, world! I am a CommentList.
      	</div>
      );
  }
});

module.exports = CommentList;

