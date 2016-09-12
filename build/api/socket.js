'use strict';

var io = require('socket.io');

module.exports = function (store, server) {

  var ioServ = io.listen(server, { transports: ['websocket'] });

  store.subscribe(function () {
    return ioServ.emit('state', store.getState().toJS());
  });

  ioServ.on('connection', function (socket) {

    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
};