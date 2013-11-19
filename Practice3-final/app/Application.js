Ext.define('Practice3.Application', {
    name: 'Practice3',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        'Persons'
    ],

    models: [
        'Person',
        'Address'
    ],

    launch: function(){
        this.testPersonModel();
        this.testValidations();
        this.testPersonsStore();
    },

    testPersonsStore: function(){
        var tmpPersonsStore = Ext.getStore('Persons');
        tmpPersonsStore.each(function(argRecord){
            console.log(argRecord.get('fullname'));
        },this);

        var tmpWomen = tmpPersonsStore.getWomen();
        console.log('Women: ');
        Ext.Array.each(tmpWomen,function(argPerson){
            console.log(argPerson.get('fullname'));
        });

    },

    testValidations: function(){
        var tmpPerson = Ext.create("Practice3.model.Person",{
            firstname: '',
            lastname: '',
            age: 25,
            birthDate: '24/07/1985 14:24:11',
            gender: 'Undefined',
            username: 'Admin',
            email: 'some@email.com'
        });
        var tmpErrors = tmpPerson.validate();
        var tmpErrorMessage = "The following errors are happenning with this model: \n";
        tmpErrors.each(function(argError){
            console.log(argError);
            tmpErrorMessage = tmpErrorMessage + argError.field + " " + argError.message + "\n" ;
        });
        alert(tmpErrorMessage);
    },

    testPersonModel: function(){
        var tmpPerson = Ext.create("Practice3.model.Person",{
            firstname: 'Juan Carlos',
            lastname: 'Morales Mora',
            age: 25,
            birthDate: '24/07/1985 14:24:11'
        });
        console.log('First name = ' + tmpPerson.get('firstname'));
        console.log('Last name = ' + tmpPerson.get('lastname'));
        console.log('Age = ' + tmpPerson.get('age'));
        console.log('BirthDate = ' + tmpPerson.get('birthDate'));
        console.log('Fullname = ' + tmpPerson.get('fullname'));

        var tmpAddresses = tmpPerson.addresses();

        tmpAddresses.add({
            address: 'Somewhere in Costa Rica',
            country: 'Costa Rica',
            phone: 88554477
        });

        console.log("Addresses count = " + tmpPerson.addresses().count());

    }

});

