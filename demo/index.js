'use strict';

const app = require('express')();
const server = require('http').createServer(app);
const localizerTool = require('../build/index');
const front = require('../../react-localizer/index');

app.get('/',function(req,res){
  res.send(front);
});

server.listen(3333, function() {

  localizerTool.init({
    mongodb: '//localhost/localizertool_test',
    //route: 'localhost:3333/localizer',
    server
  });

});
