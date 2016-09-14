'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localeterms = undefined;

var _reducerCreator;

var _immutable = require('immutable');

var _reducerCreator2 = require('../libs/reducerCreator');

var _reducerCreator3 = _interopRequireDefault(_reducerCreator2);

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _Initial = require('../constants/Initial');

var _Initial2 = _interopRequireDefault(_Initial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var localeterms = exports.localeterms = (0, _reducerCreator3.default)(_Initial2.default, (_reducerCreator = {}, _defineProperty(_reducerCreator, _ActionTypes2.default.FETCHING_LOCALE_TERMS, function (state) {
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.SET_LOCALE_TERMS, function (state, action) {
  return state.set('terms', (0, _immutable.fromJS)({
    section: action.section,
    locale: action.locale,
    list: action.result
  }));
}), _defineProperty(_reducerCreator, _ActionTypes2.default.INSERTING_LOCALE_TERM, function (state) {
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.ADD_LOCALE_TERM, function (state, action) {
  return state.updateIn(['terms', 'list'], function (list) {
    return list.push(action.result);
  });
}), _defineProperty(_reducerCreator, _ActionTypes2.default.UPDATING_LOCALE_TERM, function (state) {
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.CHANGE_LOCALE_TERM, function (state, action) {
  var index = state.get('terms').map(function (term, index) {
    return term.id === action.result.id ? index : undefined;
  }).filter(function (item) {
    return item !== undefined;
  }).get(0);
  return state.updateIn(['terms', 'list'], function (list) {
    return list.setIn([index], action.result);
  });
}), _defineProperty(_reducerCreator, _ActionTypes2.default.DELETING_LOCALE_TERM, function (state) {
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.REMOVE_LOCALE_TERM, function (state, action) {
  return state.setIn(['terms', 'list'], state.getIn(['terms', 'list']).filter(function (term) {
    return term.id !== action.id;
  }));
}), _reducerCreator));