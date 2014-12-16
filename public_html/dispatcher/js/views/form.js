define(['jquery', 'underscore', 'backbone', 'text!templates/formTemplate.html'], function ($, _, Backbone, formTemplate) {

    var FormView = Backbone.View.extend({
        el: '#input',
        aggregator: null,
        initialize: function (options) {
            this.aggregator = options.ag;
            this.render();
        },
        events: {
            "click #setData": "setData",
            "click .reset": "reset"
        },
        render: function () {
            this.$el.html(formTemplate);
            return this;
        },
        setData: function () {
            if ($("#name").val() !== "") {
                this.model.set({name: $("#name").val()});
            }
            if ($("#year").val() !== "") {
                this.model.set({year: $("#year").val()});
            }
            this.aggregator.trigger("aggregateEvent", this.model);

            return false;
        },
        reset: function () {
            this.model.clear().set(this.model.defaults);
            this.aggregator.trigger("aggregateEvent", this.model);

            return false;
        }
    });
    return FormView;
});