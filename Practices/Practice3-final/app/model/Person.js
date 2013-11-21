Ext.define('Practice3.model.Person', {

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
        },
        {
            name: 'age',
            type: 'int'
        },
        {
            name: 'birthDate',
            type: 'date',
            dateFormat: 'd/m/Y H:i:s'
        },
        {
            name: 'fullname',
            type: 'string',
            convert: function(argValue,argRecord){
                return argRecord.get('firstname') + ' ' + argRecord.get('lastname');
            }
        },
        {
            name: 'gender',
            type: 'string'
        },
        {
            name: 'username',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        }
    ],

    hasMany: {
        model: 'Practice3.model.Address',
        name: 'addresses'
    },

    validations: [
        {
            type: 'presence',
            field: 'firstname'
        },
        {
            type: 'length',
            field: 'firstname',
            min: 2
        },
        {
            type: 'inclusion',
            field: 'gender',
            list: ['Male', 'Female']
        },
        {
            type: 'exclusion',
            field: 'username',
            list: ['Admin', 'Operator']
        },
        {
            type: 'email',
            field: 'email',
            message: 'Email address must have the following format: "email@email.com"'
        }
    ]

});

