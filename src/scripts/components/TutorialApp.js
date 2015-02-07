'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var CommentBox = require('./CommentBox');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var TutorialApp = React.createClass({
  render: function() {
    	return (
      		<div className='main'>
        		<ReactTransitionGroup transitionName="fade">
          		<CommentBox url="http://localhost:3000/comments.json" pollInterval={10000}/>
       			 </ReactTransitionGroup>
      		</div>
    );
  }
});

// <CommentBox />

module.exports = TutorialApp;
