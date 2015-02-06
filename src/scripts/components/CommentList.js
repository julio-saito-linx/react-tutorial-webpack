'use strict';

var React = require('react/addons');
var Comment = require('./Comment');

require('../../styles/CommentList.css');

var CommentList = React.createClass({
  render: function () {
    return (
        <div className="commentList">
			<Comment author="Pete Hunt">This is one comment</Comment>
        	<Comment author="Jordan Walke">This is *another* comment</Comment>
      	</div>
      );
  }
});

module.exports = CommentList;

