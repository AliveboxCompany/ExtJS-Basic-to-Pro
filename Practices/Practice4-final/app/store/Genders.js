Ext.define('Practice4.store.Genders', {

    extend: 'Ext.data.Store',

    fields: [
        'name',
        'value'
    ],

    data: [
        {
            "name": "Male",
            "value": "Male"
        },
        {
            "name": "Female",
            "value": "Female"
        }
    ]

});

