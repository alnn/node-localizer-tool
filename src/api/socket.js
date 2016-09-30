'use strict';

import io from 'socket.io';
//import {fetchSections} from './../actions/SectionActions';

export default (store, server) => {

  const ioServ = io.listen(server, { transports: ['websocket'] });

  store.subscribe(
    () => ioServ.emit('state', store.getState())
  );

  ioServ.on('connection', socket => {

    socket.emit('state', store.getState());

    //socket.emit('fetchSections', fetchSections());

    socket.on('action', store.dispatch.bind(store));

  });

};
