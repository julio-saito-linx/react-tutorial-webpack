'use strict';

describe('CommentBox', function () {
  var React = require('react/addons');
  var CommentBox, component;

  beforeEach(function () {
    CommentBox = require('../../../src/scripts/components/CommentBox.js');
    component = React.createElement(CommentBox);
  });

  it('should create a new instance of CommentBox', function () {
    expect(component).toBeDefined();
  });
});
