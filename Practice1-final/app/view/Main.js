Ext.define('Practice1.view.Main', {

    extend: 'Ext.container.Container',

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
        this.html = 'Current user = ' + this.getFirstName() + ' ' + this.getLastName();
        var tmpLabel = Ext.create('Ext.form.Label',{
            text: 'Test label'
        });
        this.callParent(arguments);
    },

    applyFirstName: function(argFirstName){
        console.log('Main -> applyFirstName = ' + argFirstName);
        return argFirstName;
    },

    refresh: function(){
        console.log('Main -> refresh...');
        this.update('Current user = ' + this.getFirstName() + ' ' + this.getLastName());
    },

    updateFirstName: function(argFirstName){
        console.log('Main -> updateFirstName...');
        this.refresh();
    }

});

