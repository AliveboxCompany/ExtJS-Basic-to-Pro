Ext.define('Practice6.view.MyFirstGrid', {

    extend: 'Ext.grid.Panel',
    xtype: 'myfirstgrid',

    width: 600,
    height: 200,
    title: 'Simpsons Grid',

    store: 'Simpsons',

    columns: [
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
        }
    ]

});

