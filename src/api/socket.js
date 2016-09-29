'use strict';

import io from 'socket.io';

export default (store, server) => {

  const ioServ = io.listen(server, { transports: ['websocket'] });

  store.subscribe(
    () => ioServ.emit('state', store.getState())
  );

  ioServ.on('connection', socket => {

    socket.emit('state', store.getState());
    socket.on('action', store.dispatch.bind(store));

  });

};
