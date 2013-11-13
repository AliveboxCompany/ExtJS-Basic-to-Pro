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
            name: 'firstname',
            minLength: 2,
            minLengthText: 'Firstname is requried and its min length is 2',
            allowBlank: false,
            allowBlankText: 'Firstname is requried and its min length is 2',
            validateOnChange: false,
            validateOnBlur: true
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
            name: 'email',
            vtype: 'email'
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Birth Date',
            name: 'birthdate',
            format: 'd/m/Y'
        },

        {
            xtype: 'textfield',
            inputType: 'password',
            fieldLabel: 'Password',
            id: 'userpassword'
        },
        {
            xtype: 'textfield',
            inputType: 'password',
            fieldLabel: 'Confirm Password',
            vtype: 'confirmPassword',
            initialPassField: 'userpassword'
        }

    ],

    initComponent: function () {
        this.callParent(arguments);
        this.getForm().loadRecord(Ext.create('Practice4.model.Person', {
            firstname: 'Juan Carlos',
            lastname: 'Morales Mora',
            age: 28,
            gender: 'Male',
            email: 'juank.memphis@gmail.com',
            birthdate: '24/07/1985'
        }));

        Ext.defer(function () {

            //Here we will validate the form

            //First we need to update the record with the values of the form
            var tmpRecord = this.getForm().getRecord();
            this.getForm().updateRecord(tmpRecord);

            //Then we execute the model validation and we mark the form as invalid if required
            var tmpErrors = tmpRecord.validate();
            if (!Ext.isEmpty(tmpErrors.items)) {
                this.getForm().markInvalid(tmpErrors);
            }

        }, 2000, this);

    }

});

