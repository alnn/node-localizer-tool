'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocales = exports.fetchingLocales = undefined;
exports.fetchLocales = fetchLocales;

var _actionCreator = require('../libs/actionCreator');

var _actionCreator2 = _interopRequireDefault(_actionCreator);

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _Locales = require('../constants/Locales');

var _Locales2 = _interopRequireDefault(_Locales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchingLocales = exports.fetchingLocales = (0, _actionCreator2.default)(_ActionTypes2.default.FETCHING_TERMS);
var setLocales = exports.setLocales = (0, _actionCreator2.default)(_ActionTypes2.default.SET_TERMS, 'result');

function fetchLocales() {
  return {
    types: {
      pre: _ActionTypes2.default.FETCHING_LOCALES,
      success: _ActionTypes2.default.SET_LOCALES,
      fail: _ActionTypes2.default.FAIL_FETCHING
    },
    params: {},
    requestingAPI: function requestingAPI() {
      return new Promise(function (resolve) {
        resolve(_Locales2.default);
      });
    }
  };
}