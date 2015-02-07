'use strict';

var React = require('react/addons');
var marked = require('marked');

require('../../styles/Comment.css');

var Comment = React.createClass({
  render: function () {
  	var rawMarkup = marked(this.props.children.toString());
    return (
        <div className="Comment">
          <div className="section group">
            <div className="col span_3_of_4">
    	        <h2 className="commentAuthor">
    	          	{ this.props.author }
    	        </h2>
    	        <span className="commentBody" dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
            <div className="col span_1_of_4">
              <button type="button" id="remove_button">remove this comment</button>
            </div>
          </div>

	    </div>
      );
  }
});

module.exports = Comment;

