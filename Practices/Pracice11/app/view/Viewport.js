Ext.define('Practice11.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Fit',
        'Practice11.view.Main'
    ],

    layout: {
        type: 'fit'
    },

    items: [
        {
            xtype: 'app-main',
            autoScroll: true
        }
    ]
});
