Ext.define('Practice8.controller.MainController', {

    extend: 'Ext.app.Controller',

    templateData: {
        name: 'Don Griffin',
        title: 'Senior Technomage',
        company: 'Sencha Inc.',
        drinks: ['Coffee', 'Water', 'More Coffee'],
        hasVacations: false,
        kids: [
            {name: 'Aubrey', age: 17 },
            {name: 'Joshua', age: 13 },
            {name: 'Cale', age: 10 },
            {name: 'Nikol', age: 5 },
            {name: 'Solomon', age: 0 }
        ]
    },

    templateData2: [
        { fname: 'Juan Carlos', lname: 'Morales Mora' },
        { fname: 'Alejandra', lname: 'Morales Mora' },
        { fname: 'Jose Pablo', lname: 'Morales Mora' },
        { fname: 'Jose Pablo', lname: 'Morales Mora' }
    ],

    refs: [
        {
            ref: 'templateContainer',
            selector: 'app-main container[itemId=templateContainer]'
        }
    ],

    init: function () {
        this.control({
            'app-main container[itemId=templateContainer]': {
                afterrender: this.onTemplateContainerAfterRender
            },
            'myfirstdataview': {
                select: this.onImageSelected
            }
        });
    },

    onImageSelected: function(argDataViewModel,argRecord){
        alert('Image selected = ' + argRecord.get('caption'));
    },

    onTemplateContainerAfterRender: function () {
        var tmpTemplateContainer = this.getTemplateContainer();
        tmpTemplateContainer.update(this.templateData2);
    }

});
