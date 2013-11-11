Ext.define('Practice3.model.Address', {

    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'address',
            type: 'string'
        },
        {
            name: 'country',
            type: 'string'
        },
        {
            name: 'phone',
            type: 'int'
        }
    ]

});
console.log('Address loaded');
