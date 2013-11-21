Ext.define('Practice10.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Fit',
        'Practice10.view.Main'
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
