Ext.define('Practice4.Application', {
    name: 'Practice4',

    extend: 'Ext.app.Application',

    views: [
        'MyFirstForm'
    ],

    controllers: [
        // TODO: add controllers here
    ],

    models: [
        'Person'
    ],

    stores: [
        // TODO: add stores here
    ],

    launch: function(){
        Ext.apply(Ext.form.field.VTypes, {

            confirmPassword: function(argValue, argField) {
                if (argField.initialPassField) {
                    var tmpPasswordField = Ext.getCmp(argField.initialPassField);
                    return (argValue == tmpPasswordField.getValue());
                }
                return true;
            },

            confirmPasswordText : 'Passwords do not match'

        });
    }

});
