Ext.define('Practice2.view.MySecondView', {

    extend: 'Ext.panel.Panel',

    xtype: 'mysecondview',

    height: 400,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Dock at the top'
                }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    text: 'Dock at the bottom'
                }
            ]
        }
    ],

    items: [
        {
            xtype: 'container',
            style: 'background-color: #000000',
            height: '100%'
        }
    ]

});


