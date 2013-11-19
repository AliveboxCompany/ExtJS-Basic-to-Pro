Ext.define('Practice2.view.MyFirstView', {

    extend: 'Ext.tab.Panel',

    xtype: 'myfirstview',

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'container',
                    style: 'background-color: #ff0000',
                    flex: 2,
                    height: 200,
                    html: 'First tab'
                },
                {
                    xtype: 'container',
                    style: 'background-color: #00ff00',
                    flex: 1,
                    height: 150,
                    html: 'First tab'
                }
            ]
        },
        {
            xtype: 'container',
            height: 400,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    style: 'background-color: #ff0000',
                    flex: 1,
                    width: 200,
                    html: 'First tab'
                },
                {
                    xtype: 'container',
                    style: 'background-color: #00ff00',
                    flex: 1,
                    width: 150,
                    html: 'First tab'
                }
            ]
        }
    ]

});


