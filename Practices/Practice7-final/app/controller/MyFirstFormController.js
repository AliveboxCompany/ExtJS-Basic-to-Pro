Ext.define('Practice7.controller.MyFirstFormController', {

    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'myFirstForm',
            selector: 'myfirstform'
        },
        {
            ref: 'resetFormButton',
            selector: 'myfirstform button[itemId=btnResetForm]'
        },
        {
            ref: 'saveFormButton',
            selector: 'myfirstform button[itemId=btnSaveForm]'
        }
    ],

    init: function(){
        this.control({
            myfirstform: {
                afterrender: this.onFormAfterrender,
                resetForm: this.resetForm,
                saveForm: this.saveForm
            }
        });
    },

    resetForm: function(){
        console.log('onResetFormClicked...');
        var tmpForm = this.getMyFirstForm();
        tmpForm.getForm().reset();
    },

    saveForm: function(){
        this.validateForm();
    },

    validateForm: function(){
        var tmpForm = this.getMyFirstForm();
        var tmpRecord = tmpForm.getForm().getRecord();
        tmpForm.getForm().updateRecord(tmpRecord);
        var tmpErrors = tmpRecord.validate();
        if (!Ext.isEmpty(tmpErrors.items)) {
            tmpForm.getForm().markInvalid(tmpErrors);
        }else{
            alert('The form is valid and is ready to be saved...');
        }
    },

    onFormAfterrender: function(){
        this.fillFormDefaultValues();
    },

    fillFormDefaultValues: function(){
        var tmpForm = this.getMyFirstForm();
        tmpForm.getForm().loadRecord(Ext.create('Practice7.model.Person', {
            firstname: 'Juan Carlos',
            lastname: 'Morales Mora',
            age: 28,
            gender: 'Male',
            email: 'juank.memphis@gmail.com',
            birthDate: '24/07/1985'
        }));
    }

});


