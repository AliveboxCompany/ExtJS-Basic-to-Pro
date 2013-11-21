Ext.define('Practice4.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Fit',
        'Practice4.view.Main'
    ],

    layout: {
        type: 'fit'
    },

    items: [
        {
            xtype: 'app-main'
        }
    ]
});
