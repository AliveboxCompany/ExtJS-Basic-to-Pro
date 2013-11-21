Ext.define('Practice1.Application', {
    name: 'Practice1',

    extend: 'Ext.app.Application',

    requires: [
        'Practice1.ConfigManager'
    ],

    testSingleton: function(){
        Practice1.ConfigManager.loadConfigurationFile();
    },

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
        console.log('Application -> launch()...');
        this.testStatics();
    },

    testStatics: function(){
        console.log(Practice1.view.Main.SAVE_URL);
        console.log(Practice1.view.Main.REMOVE_URL);
    }

});
