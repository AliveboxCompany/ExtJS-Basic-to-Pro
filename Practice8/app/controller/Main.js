Ext.define('Practice8.controller.Main', {

    extend: 'Ext.app.Controller',

    templateData: [
        {fName: 'Steve', lName: 'Drucker', type: 'Developer'},
        {fName: 'Jason', lName: 'Perry',   type: 'Instructor'},
        {fName: 'Tracey',lName: 'Dunn',   type: 'Creative'}
    ],

    refs: [
        {
            ref: 'mainContainer',
            selector: 'app-main container[itemId=mainContainer]'
        }
    ],

    init: function () {
        this.control({

            'app-main container[itemId=mainContainer]': {
                afterrender: this.onMainContainerAfterRender
            },
            'myfirstdataview': {
                select: this.onImageSelected
            }

        });
    },

    onMainContainerAfterRender: function () {
        var tmpMainContainer = this.getMainContainer();
        tmpMainContainer.update(this.templateData);
    },

    onImageSelected: function(argDataViewModel,argRecord){
        alert('Image selected = ' + argRecord.get('caption'));
    }

});

