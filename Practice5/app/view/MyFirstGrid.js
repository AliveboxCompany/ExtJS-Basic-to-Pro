Ext.create('Ext.data.Store', {

    storeId: 'simpsonsStore',

    fields: ['name', 'email', 'phone', 'isAlcoholic', 'birthDate', 'weight'],

    data: [
        { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224", 'isAlcoholic': false,
            'birthDate': '11/11/1975', 'weight': 40.1234 },
        { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234", 'isAlcoholic': false,
            'birthDate': '11/11/1973', 'weight': 45.1234 },
        { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244", 'isAlcoholic': true,
            'birthDate': '11/11/1945', 'weight': 150.1234 },
        { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254", 'isAlcoholic': false,
            'birthDate': '11/11/1955', 'weight': 70.1234 }
    ]

});

Ext.define('Practice5.view.MyFirstGrid', {

    extend: 'Ext.grid.Panel',
    xtype: 'myfirstgrid',

    width: 1000,
    height: 200,
    title: 'Simpsons Grid',

    store: Ext.getStore('simpsonsStore'),

    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: 'Name',
            dataIndex: 'name'
        },
        {
            text: 'Email',
            dataIndex: 'email',
            flex: 1
        },
        {
            text: 'Phone',
            dataIndex: 'phone'
        },
        {
            xtype: 'booleancolumn',
            text: 'Is an Alcoholic?',
            dataIndex: 'isAlcoholic',
            trueText: 'Yeah',
            falseText: 'Nope'
        },
        {
            text: 'Is an Alcoholic?',
            dataIndex: 'isAlcoholic',
            renderer: function(argValue, argMetadata, argRecord, argRowIndex, argColIndex, argStore){
                if(argValue){
                    return "Yeah";
                }
                return "Nope";
            }
        },
        {
            xtype: 'datecolumn',
            text: 'Birth Date',
            dataIndex: 'birthDate',
            format: 'Y-m-d'
        },
        {
            xtype: 'numbercolumn',
            text: 'Weight (kg)',
            dataIndex: 'weight',
            format: '0.00 kg'
        },
        {
            xtype: 'templatecolumn',
            text: 'Full Name',
            dataIndex: 'fullname',
            tpl: '{name} Simpsons'
        },
        {
            xtype: 'actioncolumn',
            width: 50,
            text: 'Actions',
            items: [
                {
                    icon: 'resources/img/edit-icon.png',
                    tooltip: 'Edit',
                    handler: function(argGrid, argRowIndex, argColIndex){
                        var tmpRecord = argGrid.getStore().getAt(argRowIndex);
                        alert("Edit " + tmpRecord.get('name'));
                    }
                },
                {
                    icon: 'resources/img/remove-icon.png',
                    tooltip: 'Remove',
                    handler: function(argGrid, argRowIndex, argColIndex){
                        var tmpRecord = argGrid.getStore().getAt(argRowIndex);
                        alert("Remove " + tmpRecord.get('name'));
                    }
                }
            ]
        }
    ]

});

