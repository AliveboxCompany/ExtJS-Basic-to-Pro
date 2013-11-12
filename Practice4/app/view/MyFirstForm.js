var genders = Ext.create('Ext.data.Store', {

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

Ext.define('Practice4.view.MyFirstForm', {

    extend: 'Ext.form.Panel',

    xtype: 'myfirstform',

    bodyPadding: 10,
    defaultType: 'textfield',
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    items: [
        {
            fieldLabel: 'First Name',
            name: 'firstname'
        },
        {
            fieldLabel: 'Last Name',
            name: 'lastname'
        },
        {
            xtype: 'numberfield',
            name: 'age',
            fieldLabel: 'Age',
            value: 0,
            maxValue: 110,
            minValue: 0
        },
        {
            xtype: 'combobox',
            name: 'gender',
            fieldLabel: 'Gender',
            store: genders,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            editable: false
        },
        {
            fieldLabel: 'Email',
            name: 'email'
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Birth Date',
            name: 'birthdate',
            format: 'd/m/Y'
        }

    ],

    initComponent: function(){
        this.callParent(arguments);
        this.getForm().loadRecord(Ext.create('Practice4.model.Person'));
    }

});

