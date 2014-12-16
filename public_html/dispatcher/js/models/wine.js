define(['backbone'], function (Backbone) {
    'use strict';
    var WineModel = Backbone.Model.extend({
        defaults: {
            name: "Arginao Non Confunditur",
            grapes: "Cabernet Sauvignon",
            country: "Italy",
            region: "Tuscany",
            year: 2009
        }
    });
    return WineModel;
});