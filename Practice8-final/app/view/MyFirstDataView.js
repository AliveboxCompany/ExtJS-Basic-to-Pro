Ext.define('Practice8.view.MyFirstDataView', {

    extend: 'Ext.view.View',

    xtype: 'myfirstdataview',

    store: 'Images',
    itemSelector: 'div.thumb-wrap',
    emptyText: 'No images available',

    tpl: new Ext.XTemplate(
        '<tpl for=".">',
        '<div style="margin-bottom: 10px;" class="thumb-wrap">',
        '<img src="{src}" />',
        '<br/><span>{caption}</span>',
        '</div>',
        '</tpl>'
    )

});

