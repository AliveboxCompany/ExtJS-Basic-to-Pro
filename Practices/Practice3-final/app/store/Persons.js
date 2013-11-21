Ext.define('Practice3.store.Persons', {

    extend: 'Ext.data.Store',

    model: 'Practice3.model.Person',

    data: [
        {
            firstname: 'Juan Carlos',
            lastname: 'Morales Mora',
            gender: 'Male'
        },
        {
            firstname: 'Jose Pablo',
            lastname: 'Morales Mora',
            gender: 'Male'
        },
        {
            firstname: 'Kimberly',
            lastname: 'Zuniga Duran',
            gender: 'Female'
        }
    ],

    getWomen: function(){
        var tmpWomen = [];
        this.each(function(argPerson){
            if(argPerson.get('gender') === "Female" ){
                tmpWomen.push(argPerson);
            }
        });
        return tmpWomen;
    }

});

