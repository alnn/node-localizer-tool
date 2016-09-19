'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

require('../models/Section');

require('../models/Term');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load models
exports.default = function (params) {
  _mongoose2.default.Promise = Promise;;
  return _mongoose2.default.connect(params.uri, params.options).connection;
};