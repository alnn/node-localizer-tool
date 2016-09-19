'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducerCreator;

var _immutable = require('immutable');

var _reducerCreator2 = require('../libs/reducerCreator');

var _reducerCreator3 = _interopRequireDefault(_reducerCreator2);

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _Initial = require('../constants/Initial');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reducerCreator3.default)(_Initial.INITIAL_STATE, (_reducerCreator = {}, _defineProperty(_reducerCreator, _ActionTypes2.default.FETCHING_TERMS, function (state) {
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.SET_TERMS, function (state, action) {
  return state.set('terms', (0, _immutable.fromJS)({
    section: action.section,
    locale: action.locale,
    list: action.result
  }));
}), _defineProperty(_reducerCreator, _ActionTypes2.default.INSERTING_TERM, function (state) {
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.ADD_TERM, function (state, action) {
  return state.updateIn(['terms', 'list'], function (list) {
    return list.push(action.result);
  });
}), _defineProperty(_reducerCreator, _ActionTypes2.default.UPDATING_TERM, function (state) {
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.CHANGE_TERM, function (state, action) {
  var index = state.get('terms').map(function (term, index) {
    return term.id === action.result.id ? index : undefined;
  }).filter(function (item) {
    return item !== undefined;
  }).get(0);
  return state.updateIn(['terms', 'list'], function (list) {
    return list.setIn([index], action.result);
  });
}), _defineProperty(_reducerCreator, _ActionTypes2.default.DELETING_TERM, function (state) {
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.REMOVE_TERM, function (state, action) {
  return state.setIn(['terms', 'list'], state.getIn(['terms', 'list']).filter(function (term) {
    return term.id !== action.id;
  }));
}), _reducerCreator));