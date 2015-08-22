'use strict';

var will = require('willy').will;
var app = require('../src/app.js');

describe('sanity', function () {
  it('should load', function () {
    will(app).exist();
  });

  it('should show a version', function () {
    will(app.version).exist();
  });
});

describe('looking up elements', function () {
  it('should find Chlorine by "Cl"', function () {
    var element = app('Cl');
    will(element.name).be('Chlorine');
  });

  it('should find Manganese by "Manganese"', function () {
    var element = app('Manganese');
    will(element.name).be('Manganese');
  });

  it('should return undefined for non-existant symbols"', function () {
    var element = app('xyz');
    will(element).be(undefined);
  });
});
