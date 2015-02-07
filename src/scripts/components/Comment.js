'use strict';

var React = require('react/addons');
var marked = require('marked');

require('../../styles/Comment.css');

var Comment = React.createClass({
  render: function () {
  	var rawMarkup = marked(this.props.children.toString());
    return (
        <div className="Comment">
	        <h2 className="commentAuthor">
	          	{ this.props.author }
	        </h2>
	        <span className="commentBody" dangerouslySetInnerHTML={{__html: rawMarkup}} />
	    </div>
      );
  }
});

module.exports = Comment;

