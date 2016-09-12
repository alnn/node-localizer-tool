'use strict';

var mongoose = require('mongoose');
//const Section = mongoose.model('Section');

var data = {
  sections: {},
  locales: {},
  nodes: {}
};

var _save = function _save(item, scheme) {

  if (!item.id) {
    item.id = Object.keys(data[scheme]).length + 1;
  }

  data[scheme][item.id] = item;

  return data[scheme][item.id];
};

module.exports = {
  saveSection: function saveSection(item) {
    return _save(item, 'sections');
  },
  saveLocale: function saveLocale(item) {
    return _save(item, 'locales');
  },
  saveNode: function saveNode(item) {
    return _save(item, 'nodes');
  },
  getSections: function getSections() {
    //return Section.getList();

    return data.sections;
  },
  getLocales: function getLocales() {

    return data.locales;
  },
  getNodes: function getNodes() {

    return data.nodes;
  }
};