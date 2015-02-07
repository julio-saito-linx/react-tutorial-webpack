'use strict';

var React = require('react/addons');
var marked = require('marked');
var $ = require('jquery');

require('../../styles/Comment.css');

var Comment = React.createClass({
  getInitialState: function() {
    return { removeText: 'remove this comment' };
  },
  handleRemove: function(e) {
    e.preventDefault();
    this.setState( { removeText: 'removing' } );
    // POST to delete
    $.ajax({
        url: 'http://localhost:3000/comments.json',
        dataType: 'json',
        type: 'POST',
        data: { action: 'delete', id: this.props.id },
        success: function(data) {
          this.setState( { removeText: 'removed' } );
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
  },
  render: function () {
  	var rawMarkup = marked(this.props.children.toString());
    return (
        <div className="Comment" ref="all_comment">
          <div className="section group">
            <div className="col span_3_of_4">
              <h2 className="commentAuthor">
                  { this.props.author }
              </h2>
    	        <span className="commentAuthor">
    	          	id: { this.props.id }
    	        </span>
    	        <span className="commentBody" dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
            <div className="col span_1_of_4">
              <button type="button" id="remove_button" ref="remove_button" onClick={ this.handleRemove }>{ this.state.removeText }</button>
            </div>
          </div>

	    </div>
      );
  }
});

module.exports = Comment;

