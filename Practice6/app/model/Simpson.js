Ext.define('Practice6.model.Simpson', {

    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'phone',
            type: 'string'
        },
        {
            name: 'isAlcoholic',
            type: 'boolean'
        },
        {
            name: 'birthDate',
            type: 'date',
            dateFormat: 'Y-m-d'
        },
        {
            name: 'weight',
            type: 'number'
        }
    ],

    proxy: {
        type: 'ajax',
        url: 'resources/data/simpsons.json',
        reader: {
            type: 'json',
            root: 'simpsons'
        }
    }

});