'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeLocale = exports.deletingLocale = exports.addLocale = exports.insertingLocale = exports.removeSection = exports.deletingSection = exports.changeSection = exports.updatingSection = exports.addSection = exports.insertingSection = exports.setSections = exports.fetchingSections = undefined;
exports.fetchSections = fetchSections;
exports.insertSection = insertSection;
exports.updateSection = updateSection;
exports.deleteSection = deleteSection;
exports.insertLocale = insertLocale;
exports.deleteLocale = deleteLocale;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _actionCreator = require('../libs/actionCreator');

var _actionCreator2 = _interopRequireDefault(_actionCreator);

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = _mongoose2.default.model('Section');

var fetchingSections = exports.fetchingSections = (0, _actionCreator2.default)(_ActionTypes2.default.FETCHING_SECTIONS);
var setSections = exports.setSections = (0, _actionCreator2.default)(_ActionTypes2.default.SET_SECTIONS, 'result');

var insertingSection = exports.insertingSection = (0, _actionCreator2.default)(_ActionTypes2.default.INSERTING_SECTION, 'name');
var addSection = exports.addSection = (0, _actionCreator2.default)(_ActionTypes2.default.ADD_SECTION, 'name', 'result');

var updatingSection = exports.updatingSection = (0, _actionCreator2.default)(_ActionTypes2.default.UPDATING_SECTION, 'id', 'name');
var changeSection = exports.changeSection = (0, _actionCreator2.default)(_ActionTypes2.default.CHANGE_SECTION, 'id', 'name', 'result');

var deletingSection = exports.deletingSection = (0, _actionCreator2.default)(_ActionTypes2.default.DELETING_SECTION, 'id');
var removeSection = exports.removeSection = (0, _actionCreator2.default)(_ActionTypes2.default.REMOVE_SECTION, 'id');

var insertingLocale = exports.insertingLocale = (0, _actionCreator2.default)(_ActionTypes2.default.INSERTING_LOCALE, 'sectionID', 'localeID');
var addLocale = exports.addLocale = (0, _actionCreator2.default)(_ActionTypes2.default.ADD_LOCALE, 'sectionID', 'localeID', 'result');

var deletingLocale = exports.deletingLocale = (0, _actionCreator2.default)(_ActionTypes2.default.DELETING_LOCALE, 'sectionID', 'localeID');
var removeLocale = exports.removeLocale = (0, _actionCreator2.default)(_ActionTypes2.default.REMOVE_LOCALE, 'sectionID', 'localeID', 'result');

// Async action creators:

function fetchSections() {
  return {
    types: {
      pre: _ActionTypes2.default.FETCHING_SECTIONS,
      success: _ActionTypes2.default.SET_SECTIONS,
      fail: _ActionTypes2.default.FAIL_FETCHING
    },
    params: {},
    requestingAPI: function requestingAPI() {
      return Section.getList().then(function (result) {
        return result.map(function (item) {
          return item.toPlain();
        });
      });
    }
  };
}

function insertSection(name) {
  return {
    types: {
      pre: _ActionTypes2.default.INSERTING_SECTION,
      success: _ActionTypes2.default.ADD_SECTION,
      fail: _ActionTypes2.default.FAIL_INSERTING
    },
    params: {
      name: name
    },
    requestingAPI: function requestingAPI() {
      return new Section({ name: name }).save().then(function (result) {
        return result.toPlain();
      });
    }
  };
}

function updateSection(id, name) {
  return {
    types: {
      pre: _ActionTypes2.default.UPDATING_SECTION,
      success: _ActionTypes2.default.CHANGE_SECTION,
      fail: _ActionTypes2.default.FAIL_UPDATING
    },
    params: {
      id: id, name: name
    },
    requestingAPI: function requestingAPI() {
      return Section.findOneAndUpdate({ _id: id }, { name: name }).exec().then(function (section) {
        return section && section.toPlain();
      });
    }
  };
}

function deleteSection(id) {
  return {
    types: {
      pre: _ActionTypes2.default.DELETING_SECTION,
      success: _ActionTypes2.default.REMOVE_SECTION,
      fail: _ActionTypes2.default.FAIL_DELETING
    },
    params: {
      id: id
    },
    requestingAPI: function requestingAPI() {
      return Section.removeById(id).then(function () {
        return id;
      });
    }
  };
}

function insertLocale(sectionID, localeID) {
  return {
    types: {
      pre: _ActionTypes2.default.INSERTING_LOCALE,
      success: _ActionTypes2.default.ADD_LOCALE,
      fail: _ActionTypes2.default.FAIL_INSERTING
    },
    params: {
      sectionID: sectionID, localeID: localeID
    },
    requestingAPI: function requestingAPI() {
      return Section.find({ _id: sectionID }).exec().then(function (section) {
        return section[0].addLocale(localeID).save();
      }).then(function (section) {
        return section && section.toPlain();
      });
    }
  };
}

function deleteLocale(sectionID, localeID) {
  return {
    types: {
      pre: _ActionTypes2.default.DELETING_LOCALE,
      success: _ActionTypes2.default.REMOVE_LOCALE,
      fail: _ActionTypes2.default.FAIL_DELETING
    },
    params: {
      sectionID: sectionID, localeID: localeID
    },
    requestingAPI: function requestingAPI() {
      return Section.find({ _id: sectionID }).exec().then(function (section) {
        return section[0].removeLocale(localeID).save();
      }).then(function (section) {
        return section && section.toPlain();
      });
    }
  };
}