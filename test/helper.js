'use strict';

const mongoose = require('mongoose');

module.exports = {
  connect () {
    return mongoose.connect(
      'mongodb://localhost/localizertool_test',
      { server: { socketOptions: { keepAlive: 1 } } }
    ).connection;
  }
};
