'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _mongoose = require('./libs/mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _socket = require('./api/socket');

var _socket2 = _interopRequireDefault(_socket);

var _DbMiddleware = require('./middlewares/DbMiddleware');

var _DbMiddleware2 = _interopRequireDefault(_DbMiddleware);

var _sections = require('./reducers/sections');

var _sections2 = _interopRequireDefault(_sections);

var _localeterms = require('./reducers/localeterms');

var _localeterms2 = _interopRequireDefault(_localeterms);

var _fails = require('./reducers/fails');

var _fails2 = _interopRequireDefault(_fails);

var _Initial = require('./constants/Initial');

var _Initial2 = _interopRequireDefault(_Initial);

var _SectionActions = require('./actions/SectionActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  init: function init(options) {

    (0, _mongoose2.default)(options.mongoose);

    var store = (0, _redux.createStore)((0, _redux.combineReducers)([_sections2.default, _localeterms2.default, _fails2.default]), _Initial2.default, (0, _redux.applyMiddleware)(_DbMiddleware2.default));

    (0, _socket2.default)(store, options.server);

    store.dispatch((0, _SectionActions.fetchingSections)());
  }
};