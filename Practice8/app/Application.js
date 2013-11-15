Ext.define('Practice8.Application', {
    name: 'Practice8',

    extend: 'Ext.app.Application',

    views: [
        'MyFirstDataView'
    ],

    controllers: [
        'Main'
    ],

    stores: [
        'Images'
    ],

    models: [
        'Image'
    ]

});
