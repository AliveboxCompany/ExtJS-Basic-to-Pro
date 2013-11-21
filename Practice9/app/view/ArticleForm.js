Ext.define('Practice9.view.ArticleForm', {

    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.field.Checkbox'
    ],

    xtype: 'articleform',
    bodyPadding: 10,
    defaultType: 'textfield',
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    buttons: [
        {
            text: 'Show Article values',
            handler: function(){
                var tmpForm = this.up('form');
                tmpForm.fireEvent('showArticleValues');
            }
        }
    ],

    items: [
        {
            fieldLabel: 'Message',
            name: 'message'
        },
        {
            fieldLabel: 'User',
            name: 'user'
        },
        {
            xtype: 'validateimagefield',
            fieldLabel: 'Validate Image'
        }
    ]

});




