'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (params) {

  _mongoose2.default.Promise = Promise;
  _mongoose2.default.connect(params.uri, params.options);

  // Load models
  require('../models/Section');
  require('../models/LocaleTerm');

  return _mongoose2.default;
};

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }