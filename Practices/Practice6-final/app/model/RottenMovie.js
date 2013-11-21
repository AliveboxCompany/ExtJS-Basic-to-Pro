Ext.define('Practice6.model.RottenMovie', {

    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'year',
            type: 'int'
        }
    ],

    proxy: {
        type: 'jsonp',
        url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=american&' +
            'apikey=jv7ktqjfbzj9rxe2gkx5fvk5',
        pageParam: 'page',
        limitParam: 'page_limit',
        startParam: undefined,
        reader: {
            type: 'json',
            root: 'movies',
            totalProperty: 'total'
        }
    }

});


