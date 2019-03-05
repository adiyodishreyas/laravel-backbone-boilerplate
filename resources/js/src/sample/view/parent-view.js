var _ = require('underscore');
var Backbone = require('backbone');
var ParentTemplate = require('../template/parent-template.html');
require('../style/parent-style.scss');

var ParentView = Backbone.View.extend({

    template: _.template(ParentTemplate),

    initialize: function() {},

    render: function() {
        this.$el.html(this.template({name: 'Sample Component'}));
    }

});


module.exports = ParentView;