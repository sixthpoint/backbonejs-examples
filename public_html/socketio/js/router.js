define(['jquery', 'socketio'], function ($, io) {
    'use strict';

    // Connect to the socket
    io.socket = io.connect(window.SOCKET);
    var initialize = function () {

        /*
         * Message on connection
         */
        io.socket.on('connect', function () {
            $("#log").append("I am connected");
        });

        /*
         * Message from socket.io
         */
        io.socket.on('message', function (data) {
            $("#log").append(data);
        });
    };
    /*
     * Return the router config
     */
    return {initialize: initialize};
});