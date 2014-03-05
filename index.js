'use strict';

var util = require('util');

/**
 * Make sure to always return an array. If passed undefined or null,
 * return an empty array. If an array is passed, then return the
 * array. If passed anything else, return an array containing
 * that value.
 *
 * @param {*} values Array of values or a single value
 * @return {Array} Array of values
 */
function arrayize(values) {
  // return empty array if values is empty
  if (typeof values === 'undefined' || values === null ) {
    return [];
  }
  // return array of values, converting to array if necessary
  return util.isArray(values) ? values : [values];
}

module.exports = arrayize;
