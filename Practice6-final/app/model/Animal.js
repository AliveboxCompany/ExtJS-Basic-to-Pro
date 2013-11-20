Ext.define('Practice6.model.Animal', {

    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'group', type: 'string' }
    ],

    proxy: {
        type: 'sessionstorage',
        id: 'animalsessionstorage'
    }

});

