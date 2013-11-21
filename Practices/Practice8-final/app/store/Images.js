Ext.define('Practice8.store.Images', {

    extend: 'Ext.data.Store',

    model: 'Practice8.model.Image',

    data: [
        { src:'resources/img/fallout2.jpg', caption:'Fallout 2' },
        { src:'resources/img/starcraft.jpg', caption:'Starcraft 2' },
        { src:'resources/img/bioshock.jpg', caption:'Bioshock 2' },
        { src:'resources/img/masseffect.jpg', caption:'Mass Effect 2' }
    ]

});

