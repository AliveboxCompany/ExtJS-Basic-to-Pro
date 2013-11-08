Ext.define('Practice2.view.MyFirstView', {

    extend: 'Ext.tab.Panel',

    requires: [
        'Ext.tab.Panel'
    ],

    xtype: 'myfirstview',

    items: [
        {
            xtype: 'container',
            title: 'HBox Layout',
            height: 200,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    height: 100,
                    flex: 2,
                    style: 'background-color: #ff0000'
                },
                {
                    xtype: 'container',
                    height: 100,
                    flex: 1,
                    style: 'background-color: #00ff00'
                }
            ]
        },
        {
            xtype: 'container',
            title: 'VBox Layout',
            height: 200,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    width: 100,
                    flex: 2,
                    style: 'background-color: #ff0000'
                },
                {
                    xtype: 'container',
                    width: 100,
                    flex: 1,
                    style: 'background-color: #00ff00'
                }
            ]
        }
    ]
});

