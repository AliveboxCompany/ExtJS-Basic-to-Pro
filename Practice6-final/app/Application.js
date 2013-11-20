Ext.define('Practice6.Application', {
    name: 'Practice6',

    extend: 'Ext.app.Application',

    views: [
        'MyFirstGrid',
        'RottenMoviesGrid'
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        'Simpsons',
        'RottenMovies'
    ],

    models: [
        'Simpson',
        'Animal',
        'RottenMovie'
    ],

    launch: function(){
        var tmpAnimal = Ext.create('Practice6.model.Animal',{
            name: 'Dog',
            group: 'Mammal'
        });
        tmpAnimal.save();
    }

});
