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
                    text: 'Docked at the top'
                }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    text: 'Docked at the bottom'
                }
            ]
        }
    ],

    items: [
        {
            xtype: 'container',
            html: 'Panel item',
            style: 'background-color: #0000ff',
            height: '100%'
        }
    ]

});

