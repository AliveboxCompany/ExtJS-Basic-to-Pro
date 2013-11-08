Ext.define('Practice2.view.MySecondView', {

    extend: 'Ext.container.Container',

    requires: [
        'Ext.layout.container.Column'
    ],

    xtype: 'mysecondview',

    layout: 'column',
    width: 600,
    height: 200,

    initComponent: function(){
        this.items = [
            {
                xtype: 'container',
                columnWidth: 0.30,
                style: 'background-color: #0000ff',
                html: 'First column container'
            },
            {
                xtype: 'container',
                columnWidth: 0.70,
                style: 'background-color: #ff0000',
                html: 'Second column container'
            }
        ];
        this.callParent(arguments);
    }

});

