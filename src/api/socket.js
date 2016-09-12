'use strict';

const io = require('socket.io');

module.exports = (store, server) => {

  const ioServ = io.listen(server, { transports: ['websocket'] });

  store.subscribe(
    () => ioServ.emit('state', store.getState().toJS())
  );

  ioServ.on('connection', socket => {

    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));

  });

};
