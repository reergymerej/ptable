'use strict';

var elements = require('./elements.js');

var isMatch = function (element, query) {
  var found = false;
  Object.keys(element).every(function (key) {
    found = element[key] === query;
    return !found;
  });
  return found;
};

var lookup = function (query) {
  var matches = elements.filter(function (element) {
    return isMatch(element, query);
  });

  var result;

  if (matches.length === 1) {
    result = matches[0];
  } else if (matches.length > 1) {
    result = matches;
  }

  return result;
};

lookup.version = '0.0.1';

module.exports = lookup;