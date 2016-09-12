'use strict';

var immutable = require('immutable');
var List = immutable.List;
var Map = immutable.Map;

var dbAPI = require('../api/db');

module.exports = {
  saveSection: function saveSection(state, data) {

    var id = dbAPI.saveSection();

    return state;
  }
};