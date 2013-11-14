Ext.define('Practice6.view.RottenMoviesGrid', {

    extend: 'Ext.grid.Panel',
    xtype: 'rottenmoviesgrid',

    width: 600,
    height: 300,
    title: 'Rotten Movies',

    store: 'RottenMovies',

    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            store: 'RottenMovies',
            dock: 'bottom',
            displayInfo: true
        }
    ],

    columns: [
        {
            text: 'ID',
            dataIndex: 'id'
        },
        {
            text: 'Title',
            dataIndex: 'title',
            flex: 1
        },
        {
            text: 'Year',
            dataIndex: 'year'
        }
    ]

});

