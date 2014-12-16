require.config({
    baseUrl: "/socketio/js/",
    paths: {
        jquery: '/js/libs/jquery/jquery',
        socketio: '/js/libs/socket.io//socket.io.min',
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'socketio': {
            exports: 'io'
        }
    }
});

require(['app'], function (App) {
    'use strict';
    App.initialize();
});