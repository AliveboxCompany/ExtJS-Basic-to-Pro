Ext.define('Practice5.store.Simpsons', {

    extend: 'Ext.data.Store',

    fields: [
        'name',
        'email',
        'phone',
        'isAlcoholic',
        'birthDate',
        'weight'
    ],

    data: [
        { "name": "Homer", "email": "homer@simpsons.com", "phone": "555-222-111",
            isAlcoholic: true, "birthDate": new Date(1945,11,11), "weight": 150.543 },
        { "name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-222",
            isAlcoholic: false, "birthDate": new Date(1955,11,11), "weight": 90.123 },
        { "name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-333",
            isAlcoholic: false, "birthDate": new Date(1985,11,11), "weight": 65.8768 },
        { "name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-222-444",
            isAlcoholic: false, "birthDate": new Date(1987,11,11), "weight": 50.1231}
    ]

});

