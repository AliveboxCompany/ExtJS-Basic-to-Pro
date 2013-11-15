Ext.define('Practice9.view.Main', {

    extend: 'Ext.container.Container',

    xtype: 'app-main',

    initComponent: function(){
        console.log('initComponent...');
        this.items = [
            {
                xtype: 'container',
                itemId: 'mainContainer',
                html: 'Creating custom components'
            }
        ];
        this.callParent(arguments);
        var tmpMainContainer = Ext.ComponentQuery.query('app-main container[itemId=mainContainer]');
        console.log(tmpMainContainer.length);
    },

    afterRender: function(){
        console.log('afterRender...');
        this.callParent(arguments);
        var tmpMainContainer = Ext.ComponentQuery.query('app-main container[itemId=mainContainer]');
        console.log(tmpMainContainer.length);
        Ext.Function.defer(function(){
            var tmpViewport = Ext.ComponentQuery.query('viewport')[0];
            tmpViewport.removeAll();
        },2000);
    },

    destroy: function(){
        console.log('destroy...');
        this.callParent();
    }

});

