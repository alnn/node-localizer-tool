'use strict';

var _redux = require('redux');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _socket = require('./api/socket');

var _socket2 = _interopRequireDefault(_socket);

var _middlewares = require('./middlewares');

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

module.exports = {
  init: function init(options) {

    var mongodb = options.mongodb;
    var server = options.server;

    _mongoose2.default.connect('mongodb://localhost/localizertool_test');

    var store = (0, _redux.createStore)((0, _redux.combineReducers)([_sections2.default, _localeterms2.default, _fails2.default]), _Initial2.default, (0, _redux.applyMiddleware)(_middlewares.dbMiddleWare));

    (0, _socket2.default)(store, server);

    store.dispatch((0, _SectionActions.fetchingSections)());
  }
};