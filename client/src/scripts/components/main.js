'use strict';

var TutorialApp = require('./TutorialApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={TutorialApp}>
    <Route name="/" handler={TutorialApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
