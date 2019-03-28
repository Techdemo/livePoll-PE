const express = require('express');
const socket_io = require("socket.io");
const app = express();
var io = socket_io();
app.io = io;

module.exports = function (io) {
    var app = require('express');
    var router = app.Router();

    io.on('connection', function(socket){
        console.log("made connection")
    })


    return router;
}