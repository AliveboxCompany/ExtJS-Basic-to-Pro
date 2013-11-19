Ext.define('Practice4.model.Person', {

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
            name: 'gender',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'birthDate',
            type: 'date',
            dateFormat: 'd/m/Y'
        }
    ],

    validations: [
        {
            type: 'length',
            field: 'firstname',
            min: 2,
            message: 'Firstname is requried and its min length is 2'
        },
        {
            type: 'inclusion',
            field: 'gender',
            list: ['Male', 'Female'],
            message: 'Gender is required and its value should be Male or Female'
        },
        {
            type: 'email',
            field: 'email',
            message: 'Email address is required and must have the following format: "email@email.com"'
        },
        {
            type: 'presence',
            field: 'birthDate',
            message: 'Birthdate is required'
        }
    ]

});

