define(['jquery', 'underscore', 'backbone', 'text!templates/wineTemplate.html'], function ($, _, Backbone, WineTemplate) {
    var WineView = Backbone.View.extend({
        el: '#output',
        initialize: function (options) {
            _.bindAll(this, "render");
            options.ag.bind("aggregateEvent", this.render);
        },
        render: function (model) {
            var compiledTemplate = _.template(WineTemplate)(model.toJSON());
            this.$el.html(compiledTemplate);
            return this;
        }
    });
    return WineView;
});