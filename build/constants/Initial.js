'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _immutable = require('immutable');

var _Locales = require('./Locales');

var _Locales2 = _interopRequireDefault(_Locales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = exports.INITIAL_STATE = (0, _immutable.fromJS)({ sections: [], locales: _Locales2.default, terms: {}, error: null });