'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store, server) {

  var ioServ = _socket2.default.listen(server, { transports: ['websocket'] });

  //console.log(store.getState())

  store.subscribe(function () {
    return ioServ.emit('state', store.getState());
  });

  ioServ.on('connection', function (socket) {

    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
};