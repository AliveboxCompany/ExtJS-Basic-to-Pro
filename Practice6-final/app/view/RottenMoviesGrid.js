Ext.define('Practice6.view.RottenMoviesGrid', {

    extend: 'Ext.grid.Panel',

    xtype: 'rottenmoviesgrid',

    width: 1600,
    height: 400,
    title: 'Rotten Movies Grid',

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

