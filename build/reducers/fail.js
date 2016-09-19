'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducerCreator;

var _reducerCreator2 = require('../libs/reducerCreator');

var _reducerCreator3 = _interopRequireDefault(_reducerCreator2);

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _Initial = require('../constants/Initial');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reducerCreator3.default)(_Initial.INITIAL_STATE, (_reducerCreator = {}, _defineProperty(_reducerCreator, _ActionTypes2.default.FAIL_FETCHING, function (state, action) {
  return state.set('error', action.error);
}), _defineProperty(_reducerCreator, _ActionTypes2.default.FAIL_INSERTING, function (state, action) {
  return state.set('error', action.error);
}), _defineProperty(_reducerCreator, _ActionTypes2.default.FAIL_UPDATING, function (state, action) {
  return state.set('error', action.error);
}), _defineProperty(_reducerCreator, _ActionTypes2.default.FAIL_DELETING, function (state, action) {
  return state.set('error', action.error);
}), _reducerCreator));