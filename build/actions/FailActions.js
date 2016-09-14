'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.failDeleting = exports.failUpdating = exports.failInserting = exports.failFetching = undefined;

var _actionCreator = require('../libs/actionCreator');

var _actionCreator2 = _interopRequireDefault(_actionCreator);

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var failFetching = exports.failFetching = (0, _actionCreator2.default)(_ActionTypes2.default.FAIL_FETCHING, 'error');
var failInserting = exports.failInserting = (0, _actionCreator2.default)(_ActionTypes2.default.FAIL_INSERTING, 'error');
var failUpdating = exports.failUpdating = (0, _actionCreator2.default)(_ActionTypes2.default.FAIL_UPDATING, 'error');
var failDeleting = exports.failDeleting = (0, _actionCreator2.default)(_ActionTypes2.default.FAIL_DELETING, 'error');