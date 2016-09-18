'use strict';

import io from 'socket.io';

export default (store, server) => {

  const ioServ = io.listen(server, { transports: ['websocket'] });

  //console.log(store.getState())

  store.subscribe(
    () => ioServ.emit('state', store.getState().toJS())
  );

  ioServ.on('connection', socket => {

    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));

  });

};
