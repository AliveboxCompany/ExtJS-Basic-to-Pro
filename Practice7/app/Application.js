Ext.define('Practice7.Application', {
    name: 'Practice7',

    extend: 'Ext.app.Application',

    views: [
        'MyFirstForm'
    ],

    controllers: [
        'MyFirstFormController'
    ],

    stores: [
        'Genders'
    ],

    models: [
        'Person'
    ]

});
