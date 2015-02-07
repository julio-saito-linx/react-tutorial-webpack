'use strict';

var React = require('react/addons');
var Comment = require('./Comment');

require('../../styles/CommentList.css');

var CommentList = React.createClass({
  	render: function() {
	    var commentNodes = this.props.data.map(function (comment) {
	      	return (
	        	<Comment author={comment.author}>
	          		{comment.text}
	        	</Comment>
	      	);
	    });
	    return (
	      	<div className="CommentList">
		        {commentNodes}
	      	</div>
	    );
	}
});

module.exports = CommentList;

