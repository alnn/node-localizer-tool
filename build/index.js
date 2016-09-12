'use strict';

var createStore = require('redux').createStore;
var reducer = require('./reducer');
var sockApi = require('./api/socket');

module.exports = {
  init: function init(options) {

    var mongodb = options.mongodb;
    var server = options.server;

    var store = createStore(reducer);

    sockApi(store, server);

    //store.dispatch({ type: 'NEXT' });
  }
};