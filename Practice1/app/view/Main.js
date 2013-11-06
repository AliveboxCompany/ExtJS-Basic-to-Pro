Ext.define('Practice1.view.Main', {

    extend: 'Ext.Component',

    requires: [
        'Ext.form.Label'
    ],

    xtype: 'app-main',

    statics: {
        SAVE_URL: 'save.php',
        REMOVE_URL: 'remove.php'
    },

    config: {
        firstName: 'Juan Carlos',
        lastName: 'Morales Mora'
    },

    initComponent: function(){
        var tmpLabel = Ext.create('Ext.form.Label',{
            text: 'Dynamic loading test label'
        });
        this.html = 'Current user = ' + this.getFirstName() + ' ' + this.getLastName();
        this.callParent(arguments);
    },

    refresh: function(){
        console.log('view.Main refresh');
        this.update('Current user = ' + this.getFirstName() + ' ' + this.getLastName());
    },

    applyFirstName: function(argFirstName){
        console.log('view.Main applyFirstName, value = ' + argFirstName);
        if (argFirstName == '') {
            throw new Error('['+ Ext.getDisplayName(arguments.callee) +'] firstName must be defined');
        }
        return argFirstName;
    },

    updateFirstName: function(argFirstName){
        console.log('view.Main updateFirstName, value = ' + argFirstName);
        this.refresh();
    }

});


