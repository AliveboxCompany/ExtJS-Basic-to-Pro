Ext.define('Practice8.store.Images', {

    extend: 'Ext.data.Store',
    model: 'Practice8.model.Image',

    data: [
        { src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Drawing & Charts' },
        { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data' },
        { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme' },
        { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned' }
    ]

});

