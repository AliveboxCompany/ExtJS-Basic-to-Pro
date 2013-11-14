Ext.define('Practice6.model.Person', {

    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'firstname',
            type: 'string'
        },
        {
            name: 'lastname',
            type: 'string'
        }
    ],

    proxy: {
        type: 'sessionstorage',
        id: 'personsessionstorage'
    }

});

