'use strict';

const app = require('express')();
const server = require('http').createServer(app);
const front = require('../../react-localizer/index');

import localizerTool from '../src/index';

app.get('/',function(req,res){
  res.send(front);
});

server.listen(3333, function() {

  localizerTool({
    mongoose: {
      uri: 'mongodb://localhost/localizertool_test',
      options: {}
    },
    //route: 'localhost:3333/localizer',
    server
  });

});
