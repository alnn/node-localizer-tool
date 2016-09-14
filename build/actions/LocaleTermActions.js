'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeLocaleTerm = exports.deletingLocaleTerm = exports.changeLocaleTerm = exports.updatingLocaleTerm = exports.addLocaleTerm = exports.insertingLocaleTerm = exports.setLocaleTerms = exports.fetchingLocaleTerms = undefined;
exports.fetchLocaleTerms = fetchLocaleTerms;
exports.insertLocaleTerm = insertLocaleTerm;
exports.updateLocaleTerm = updateLocaleTerm;
exports.deleteLocaleTerm = deleteLocaleTerm;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _actionCreator = require('../libs/actionCreator');

var _actionCreator2 = _interopRequireDefault(_actionCreator);

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var LocaleTerm = _mongoose2.default.model('LocaleTerm');

var fetchingLocaleTerms = exports.fetchingLocaleTerms = (0, _actionCreator2.default)(_ActionTypes2.default.FETCHING_LOCALE_TERMS, 'section', 'locale');
var setLocaleTerms = exports.setLocaleTerms = (0, _actionCreator2.default)(_ActionTypes2.default.SET_LOCALE_TERMS, 'result', 'section', 'locale');

var insertingLocaleTerm = exports.insertingLocaleTerm = (0, _actionCreator2.default)(_ActionTypes2.default.INSERTING_LOCALE_TERM, 'section', 'locale', 'path');
var addLocaleTerm = exports.addLocaleTerm = (0, _actionCreator2.default)(_ActionTypes2.default.ADD_LOCALE_TERM, 'result');

var updatingLocaleTerm = exports.updatingLocaleTerm = (0, _actionCreator2.default)(_ActionTypes2.default.UPDATING_LOCALE_TERM, 'id', 'phrase');
var changeLocaleTerm = exports.changeLocaleTerm = (0, _actionCreator2.default)(_ActionTypes2.default.CHANGE_LOCALE_TERM, 'result');

var deletingLocaleTerm = exports.deletingLocaleTerm = (0, _actionCreator2.default)(_ActionTypes2.default.DELETING_LOCALE_TERM, 'id');
var removeLocaleTerm = exports.removeLocaleTerm = (0, _actionCreator2.default)(_ActionTypes2.default.REMOVE_LOCALE_TERM, 'id');

// Async action creators:

function fetchLocaleTerms(section, locale) {
  return {
    types: {
      pre: _ActionTypes2.default.FETCHING_LOCALE_TERMS,
      success: _ActionTypes2.default.SET_LOCALE_TERMS,
      fail: _ActionTypes2.default.FAIL_FETCHING
    },
    params: {
      section: section,
      locale: locale
    },
    requestingAPI: function requestingAPI() {
      return LocaleTerm.getList(section.id, locale.id).then(function (result) {
        return result.map(function (item) {
          return item.toPlain();
        });
      });
    }
  };
}

function insertLocaleTerm(section, locale, path) {
  return {
    types: {
      pre: _ActionTypes2.default.INSERTING_LOCALE_TERM,
      success: _ActionTypes2.default.ADD_LOCALE_TERM,
      fail: _ActionTypes2.default.FAIL_INSERTING
    },
    params: {
      section: section,
      locale: locale,
      path: path
    },
    requestingAPI: function requestingAPI() {
      return new LocaleTerm({
        _section: section,
        path: [locale].concat(_toConsumableArray(path))
      }).save().then(function (result) {
        return result.toPlain();
      });
    }
  };
}

function updateLocaleTerm(id, phrase) {
  return {
    types: {
      pre: _ActionTypes2.default.UPDATING_LOCALE_TERM,
      success: _ActionTypes2.default.CHANGE_LOCALE_TERM,
      fail: _ActionTypes2.default.FAIL_UPDATING
    },
    params: {
      id: id,
      phrase: phrase
    },
    requestingAPI: function requestingAPI() {
      return LocaleTerm.findOneAndUpdate({ _id: id }, { phrase: phrase }).exec().then(function (term) {
        return term && term.toPlain();
      });
    }
  };
}

function deleteLocaleTerm(id) {
  return {
    types: {
      pre: _ActionTypes2.default.DELETING_LOCALE_TERM,
      success: _ActionTypes2.default.REMOVE_LOCALE_TERM,
      fail: _ActionTypes2.default.FAIL_DELETING
    },
    params: {
      id: id
    },
    requestingAPI: function requestingAPI() {
      return LocaleTerm.removeById(id).then(function () {
        return id;
      });
    }
  };
}