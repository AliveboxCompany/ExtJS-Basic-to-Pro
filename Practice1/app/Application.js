Ext.define('Practice1.Application', {

    name: 'Practice1',

    extend: 'Ext.app.Application',

    requires: [
        'Practice1.ConfigManager'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],

    launch: function(){
        console.log('Application.js launch...');
        this.testStatics();
        this.testSingleton();
    },

    testStatics: function(){
        console.log(Practice1.view.Main.SAVE_URL);
        console.log(Practice1.view.Main.REMOVE_URL);
    },

    testSingleton: function(){
        Practice1.ConfigManager.loadConfigurationFile();
    }

});
