Ext.define('Practice7.view.MyFirstForm', {

    extend: 'Ext.form.Panel',

    xtype: 'myfirstform',
    bodyPadding: 10,
    defaultType: 'textfield',
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    buttons: [
        {
            itemId: 'btnResetForm',
            text: 'Reset',
            handler: function(){
                var tmpForm = this.up('form');
                tmpForm.fireEvent('resetForm');
            }
        },
        {
            itemId: 'btnSaveForm',
            text: 'Save',
            handler: function(){
                var tmpForm = this.up('form');
                tmpForm.fireEvent('saveForm');
            }
        }
    ],

    items: [
        {
            fieldLabel: 'First Name',
            name: 'firstname',
            minLength: 2,
            minLengthText: 'Firstname is requried and its min length is 2',
            allowBlank: false,
            allowBlankText: 'Firstname is requried and its min length is 2',
            validateOnChange: true,
            validateOnBlur: false
        },
        {
            fieldLabel: 'Last Name',
            name: 'lastname'
        },
        {
            fieldLabel: 'Age',
            name: 'age'
        },
        {
            xtype: 'combobox',
            name: 'gender',
            fieldLabel: 'Gender',
            store: 'Genders',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            editable: false
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Birth Date',
            name: 'birthDate',
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
    ]

});

