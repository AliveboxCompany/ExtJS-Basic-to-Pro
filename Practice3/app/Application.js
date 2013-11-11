Ext.define('Practice3.Application', {
    name: 'Practice3',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.window.MessageBox'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    models: [
        'Address',
        'Person'
    ],

    stores: [
        'Persons'
    ],

    launch: function () {
        var tmpPersonsStore = Ext.getStore('Persons');

        var tmpWomen = tmpPersonsStore.getWomen();
        var tmpWomenNames = "Women: \n";

        Ext.Array.each(tmpWomen,function(argPerson){
            tmpWomenNames = tmpWomenNames + argPerson.get('fullname') + '\n';
        });

        alert(tmpWomenNames);

    }

});
