'use strict';

describe('CommentList', function () {
  var React = require('react/addons');
  var CommentList, component;

  beforeEach(function () {
    CommentList = require('../../../src/scripts/components/CommentList.js');
    component = React.createElement(CommentList);
  });

  it('should create a new instance of CommentList', function () {
    expect(component).toBeDefined();
  });
});
