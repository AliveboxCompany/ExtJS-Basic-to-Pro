Ext.define('Practice6.Application', {
    name: 'Practice6',

    extend: 'Ext.app.Application',

    views: [
        'MyFirstGrid',
        'RottenMoviesGrid'
    ],

    controllers: [
    ],

    stores: [
        'Simpsons',
        'RottenMovies'
    ],

    models: [
        'Simpson',
        'Person',
        'RottenMovie'
    ],

    launch: function(){
        var tmpPerson = Ext.create('Practice6.model.Person',{
            firstname: 'Juan Carlos',
            lastname: 'Morales Mora'
        });
        tmpPerson.save();
    }

});
