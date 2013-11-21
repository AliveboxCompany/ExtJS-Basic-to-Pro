Ext.define('Practice1.view.Viewport', {

    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.layout.container.Fit',
        'Practice1.view.Main'
    ],

    layout: {
        type: 'fit'
    },

    initComponent: function(){
        var tmpMainView = Ext.create('Practice1.view.Main');
        this.items = [
            tmpMainView
        ];
        Ext.Function.defer(function(){
            tmpMainView.setFirstName('Jose Pablo');
        },2000);
        this.callParent(arguments);
    }

});

