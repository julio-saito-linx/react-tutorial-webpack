'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var CommentBox = require('./CommentBox');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');


var data = [
  {author: "Peter Hunter", text: "This is one comment"},
  {author: "Jonny Walker", text: "This is *another* new _comment_"}
];


var TutorialApp = React.createClass({
  render: function() {
    	return (
      		<div className='main'>
        		<ReactTransitionGroup transitionName="fade">
          		<CommentBox url="comments.json" pollInterval={2000}/>
       			 </ReactTransitionGroup>
      		</div>
    );
  }
});

// <CommentBox />

module.exports = TutorialApp;
