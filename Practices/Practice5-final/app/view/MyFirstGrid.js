Ext.define('Practice5.view.MyFirstGrid', {

    extend: 'Ext.grid.Panel',

    xtype: 'myfirstgrid',

    width: 1600,
    height: 500,
    title: 'Simpsons Grid',

    store: 'Simpsons',

    selType: 'cellmodel',
    plugins: [
        Ext.create('Ext.grid.plugin.CellEditing',{
            clicksToEdit: 2
        })
    ],

    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: 'Name',
            dataIndex: 'name',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
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
            text: 'Is Alcoholic?',
            dataIndex: 'isAlcoholic',
            trueText: 'Yeah!',
            falseText: 'Nope'
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
            format: '0.00 Kg'
        },
        {
            xtype: 'templatecolumn',
            text: 'Fullname',
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
        },
        {
            text: 'Is Alcoholic?',
            dataIndex: 'isAlcoholic',
            renderer: function(argValue){
                if(argValue === true){
                    return "Yeah!!";
                }
                return "Nope";
            }
        }
    ]

});

