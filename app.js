'use strict';

var elements = require('./elements.js');

var cache = {};

var isMatch = function (element, query) {
  var found = false;
  var compare = function (value) {
    if (typeof value === 'string') {
      value = value.toLowerCase();
    }

    return value === query;
  };

  if (typeof query === 'string') {
    query = query.toLowerCase();
  }

  Object.keys(element).every(function (key) {
    found = compare(element[key]);
    return !found;
  });
  return found;
};

var lookup = function (query) {
  var result = cache[query];
  var matches;
  
  if (!result) {
    matches = elements.filter(function (element) {
      return isMatch(element, query);
    });

    if (matches.length === 1) {
      result = matches[0];
    } else if (matches.length > 1) {
      result = matches;
    }
  }

  return (cache[query] = result);
};

lookup.version = '0.0.1';

module.exports = lookup;