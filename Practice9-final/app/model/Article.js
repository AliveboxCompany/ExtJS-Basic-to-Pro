Ext.define('Practice9.model.Article', {

    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'message',
            type: 'string'
        },
        {
            name: 'user',
            type: 'string'
        },
        {
            name: 'image'
        }
    ]

});

