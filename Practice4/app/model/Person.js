Ext.define('Practice4.model.Person', {

    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'firstname',
            type: 'string',
            defaultValue: 'Juan Carlos'
        },
        {
            name: 'lastname',
            type: 'string',
            defaultValue: 'Morales Mora'
        },
        {
            name: 'age',
            type: 'int',
            defaultValue: 28
        },
        {
            name: 'gender',
            type: 'string',
            defaultValue: 'Male'
        },
        {
            name: 'email',
            type: 'string',
            defaultValue: 'juank.memphis@gmail.com'
        },
        {
            name: 'birthdate',
            type: 'date',
            dateFormat: 'd/m/Y',
            defaultValue: '24/07/1985'
        },
        {
            name: 'fullname',
            type: 'string',
            convert: function (argValue, argRecord) {
                return argRecord.get('firstname') + ' ' + argRecord.get('lastname');
            }
        }
    ],

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
            type: 'email',
            field: 'email',
            message: 'Email address must have the following format: "email@email.com"'
        }
    ]

});