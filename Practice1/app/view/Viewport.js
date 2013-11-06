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
        var tmpMain = Ext.create('Practice1.view.Main',{
            width: 500,
            height: 450
        });

        this.items = [
            tmpMain
        ];

        Ext.Function.defer(function(){
            console.log('Defer called...');
            tmpMain.setFirstName('Kimberly');
        },2000);

        this.callParent(arguments);
    }

});
