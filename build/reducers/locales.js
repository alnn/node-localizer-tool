'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _immutable = require('immutable');

var _reducerCreator2 = require('../libs/reducerCreator');

var _reducerCreator3 = _interopRequireDefault(_reducerCreator2);

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _Initial = require('../constants/Initial');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reducerCreator3.default)(_Initial.INITIAL_STATE, _defineProperty({}, _ActionTypes2.default.SET_LOCALES, function (state, action) {
  return _extends({}, state, { locales: action.result });
}));