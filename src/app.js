'use strict';

var elements = require('./elements.js');

var lookup = function (query) {

  return elements.filter(function (element) {
    return element.name === query ||
      element.symbol === query;
  })[0];
};

lookup.version = '0.0.1';

module.exports = lookup;