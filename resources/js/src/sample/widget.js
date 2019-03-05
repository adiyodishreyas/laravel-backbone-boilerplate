var $ = require('jquery');

$(function() {

    if( $('#sample').length > 0 ) {
        var SampleView = require('./view/parent-view');
        var sampleView = new SampleView({
            el: '#sample'
        });
        sampleView.render();
    }

});
