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

exports.default = (0, _reducerCreator3.default)(_Initial.INITIAL_STATE, (_reducerCreator = {}, _defineProperty(_reducerCreator, _ActionTypes2.default.FETCHING_SECTIONS, function (state) {
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.SET_SECTIONS, function (state, action) {
  return state.set('sections', (0, _immutable.fromJS)(action.result));
}), _defineProperty(_reducerCreator, _ActionTypes2.default.INSERTING_SECTION, function (state) {
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.ADD_SECTION, function (state, action) {
  // action.name, action.result
  return state.updateIn(['sections'], function (list) {
    return list.push(action.result);
  });
}), _defineProperty(_reducerCreator, _ActionTypes2.default.UPDATING_SECTION, function (state) {
  // action.id, action.name
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.CHANGE_SECTION, function (state, action) {
  // action.id, action.name, action.result
  var index = state.get('sections').map(function (section, index) {
    return section.id === action.id ? index : undefined;
  }).filter(function (item) {
    return item !== undefined;
  }).get(0);
  return state.updateIn(['sections'], function (list) {
    return list.setIn([index], action.result);
  });
}), _defineProperty(_reducerCreator, _ActionTypes2.default.DELETING_SECTION, function (state) {
  // action.id
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.REMOVE_SECTION, function (state, action) {
  // action.id
  return state.setIn(['sections'], state.get('sections').filter(function (section) {
    return section.id !== action.id;
  }));
}), _defineProperty(_reducerCreator, _ActionTypes2.default.INSERTING_LOCALE, function (state) {
  // action.sectionID, action.localeID
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.ADD_LOCALE, function (state, action) {
  // action.sectionID, action.localeID, action.result
  return state.setIn(['sections'], state.get('sections').map(function (section) {
    if (section.id === action.sectionID) {
      return section.setIn(['locales'], section.get('locales').push(action.localeID));
    } else {
      return section;
    }
  }));
}), _defineProperty(_reducerCreator, _ActionTypes2.default.DELETING_LOCALE, function (state) {
  // action.sectionID, action.localeID
  return state;
}), _defineProperty(_reducerCreator, _ActionTypes2.default.REMOVE_LOCALE, function (state, action) {
  // action.sectionID, action.localeID, action.result
  return state.setIn(['sections'], state.get('sections').map(function (section) {
    if (action.sectionID === section.id) {
      return section.setIn(['locales'], section.get('locales').filter(function (locale) {
        return action.localeID !== locale;
      }));
    } else {
      return section;
    }
  }));
}), _reducerCreator));