Ext.define('Practice6.store.RottenMovies', {

    extend: 'Ext.data.Store',

    model: 'Practice6.model.RottenMovie',
    autoLoad: true,
    pageSize: 10

});

