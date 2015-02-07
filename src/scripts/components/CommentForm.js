'use strict';

var React = require('react/addons');

require('../../styles/CommentForm.css');

var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.text.getDOMNode().value.trim();
        if (!text || !author) {
          	return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        //this.refs.author.getDOMNode().value = '';
        this.refs.text.getDOMNode().value = '';
    },
    render: function() {
      	return (
        	<form className="CommentForm" onSubmit={ this.handleSubmit }>
            <div className="section group">
              <div className="col span_3_of_4">
                <textarea rows="5" placeholder="Your markdown comment..." ref="text" id="text" />
              </div>
            </div>
            <div className="section group">
              <div className="col span_1_of_4">
                <input type="text" placeholder="Your name" ref="author" id="author" />
              </div>
              <div className="col span_1_of_4">
                <input type="submit" value="Post" id="postButton" />
              </div>
            </div>
          </form>
        );
    }
});

module.exports = CommentForm;

