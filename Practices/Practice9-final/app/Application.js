Ext.define('Practice9.Application', {
    name: 'Practice9',

    extend: 'Ext.app.Application',

    views: [
        'ArticleForm',
        'ValidateImageField'
    ],

    controllers: [
        'MainController'
    ],

    stores: [
        // TODO: add stores here
    ],

    models: [
        'Article'
    ]

});
