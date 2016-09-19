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

var _terms = require('./reducers/terms');

var _terms2 = _interopRequireDefault(_terms);

var _fail = require('./reducers/fail');

var _fail2 = _interopRequireDefault(_fail);

var _locales = require('./reducers/locales');

var _locales2 = _interopRequireDefault(_locales);

var _Initial = require('./constants/Initial');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {

  (0, _mongoose2.default)(options.mongoose).once('open', function () {

    var sectionActions = require('./actions/SectionActions');

    var store = (0, _redux.createStore)((0, _redux.combineReducers)({
      sections: _sections2.default,
      locales: _locales2.default,
      terms: _terms2.default,
      fail: _fail2.default
    }), _Initial.INITIAL_STATE, (0, _redux.applyMiddleware)(_DbMiddleware2.default));

    (0, _socket2.default)(store, options.server);

    store.dispatch(sectionActions.fetchingSections());
  });
};