'use strict';
// imports =====================================================================
var path = require('path');
global.__appRoot = path.resolve(__dirname);

// Ces imports sont utiles pour le système de logging
var config = require('./config.json'); // load the config

// Évidemment on a besoin de express et de socket.io
var express = require('express'); // load express
var favicon = require('serve-favicon');
var app = express(); // create express app
var server = require('http').createServer(app); // create webserver

app.use(favicon(__dirname + '/static/dist/favicon.png'));
app.use(express.static(__dirname + '/static/dist'));



require('./app/')(app);

server.listen(config.port, config.ip);
console.log('App listening on ' + config.ip + ':' + config.port);
