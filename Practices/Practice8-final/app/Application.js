Ext.define('Practice8.Application', {
    name: 'Practice8',

    extend: 'Ext.app.Application',

    views: [
        'MyFirstDataView'
    ],

    controllers: [
        'MainController'
    ],

    stores: [
        'Images'
    ],

    models: [
        'Image'
    ]

});
