'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var TutorialApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TutorialApp = require('../../../src/scripts/components/TutorialApp.js');
    component = React.createElement(TutorialApp);
  });

  it('should create a new instance of TutorialApp', function () {
    expect(component).toBeDefined();
  });
});
