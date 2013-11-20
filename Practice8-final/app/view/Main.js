Ext.define('Practice8.view.Main', {

    extend: 'Ext.container.Container',

    xtype: 'app-main',

    items: [
        {
            xtype: 'container',
            itemId: 'templateContainer',
            tpl: [
                '<ul>',
                    '<tpl for=".">',
                        '<li>{[this.outputName(values)]}</li>',
                    '</tpl>',
                '</ul>',
                {
                    outputName: function(argData){
                        return argData.lname + ', ' + argData.fname
                    }
                }
            ]
        },
        {
            xtype: 'myfirstdataview'
        }
    ]
});

