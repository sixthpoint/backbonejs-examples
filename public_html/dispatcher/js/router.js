define(['underscore', 'backbone', 'models/wine', 'views/form', 'views/wine'], function (_, Backbone, WineModel, FormView, WineView) {
    'use strict';

    var initialize = function () {

        var aggregator = _.extend({}, Backbone.Events);

        var formView = new FormView({ag: aggregator, model: new WineModel()});
        var wineView = new WineView({ag: aggregator});

    };
    return {initialize: initialize};
});