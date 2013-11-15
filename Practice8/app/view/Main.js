Ext.define('Practice8.view.Main', {

    extend: 'Ext.container.Container',

    xtype: 'app-main',

    items: [
        {
            xtype: 'container',
            itemId: 'mainContainer',
            tpl: [
                '<tpl for=".">',
                    'First Name: {fName} <br>',
                    'Last Name: {lName}',
                    '<hr>',
                '</tpl>'
            ]
        },
        {
            xtype: 'myfirstdataview'
        }
    ]
});

