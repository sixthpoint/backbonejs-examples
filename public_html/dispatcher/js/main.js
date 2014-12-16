require.config({
    baseUrl: "/dispatcher/js/",
    paths: {
        jquery: '/js/libs/jquery/jquery',
        underscore: '/js/libs/underscore.js/underscore',
        backbone: '/js/libs/backbone.js/backbone',
        text: '/js/libs/require-text/text',
        templates: 'templates'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['app'], function(App) {
    'use strict';
    App.initialize();
});