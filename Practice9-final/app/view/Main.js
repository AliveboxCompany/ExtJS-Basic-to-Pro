Ext.define('Practice9.view.Main', {

    extend: 'Ext.container.Container',

    xtype: 'app-main',

    initComponent: function(){
        console.log("Main -> initComponent...");
        this.items = [
            {
                xtype: 'articleform',
                itemId: 'mainContainerChild'
            }
        ];
        this.callParent(arguments);
        var tmpMainContainerChild =
            Ext.ComponentQuery.query('app-main container[itemId=mainContainerChild]');
        console.log(tmpMainContainerChild.length);
    },

    afterRender: function(){
        console.log("Main -> afterRender...");
        this.callParent(arguments);
        var tmpMainContainerChild =
            Ext.ComponentQuery.query('app-main container[itemId=mainContainerChild]');
        console.log(tmpMainContainerChild.length);
    },

    destroy: function(){
        console.log("Main -> destroy...");
        this.callParent(arguments);
    }

});




