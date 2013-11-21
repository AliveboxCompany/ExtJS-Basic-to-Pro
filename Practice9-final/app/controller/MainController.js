Ext.define('Practice9.controller.MainController', {

    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'articleForm',
            selector: 'articleform'
        },
        {
            ref: 'validateImageField',
            selector: 'articleform validateimagefield'
        }
    ],

    init: function(){
        this.control({
            'articleform': {
                afterrender: this.onArticleFormAfterrender,
                showArticleValues: this.showArticleValues
            }
        });
    },

    onArticleFormAfterrender: function(){
        var tmpArticle = Ext.create('Practice9.model.Article',{
            message: 'I want to show an image of the game I am working on...',
            user: 'juank11memphis',
            image: {
                url: 'resources/img/violentgame.jpg',
                rejected: false
            }
        });
        this.getArticleForm().getForm().loadRecord(tmpArticle);
    },

    showArticleValues: function(){
        var tmpRecord = this.getArticleForm().getRecord();
        this.getArticleForm().updateRecord(tmpRecord);

        var tmpValues = "";
        tmpValues = tmpValues + "Article message = " + tmpRecord.get('message') + "\n";
        tmpValues = tmpValues + "Article user = " + tmpRecord.get('user') + "\n";
        tmpValues = tmpValues + "Article image url = " + tmpRecord.get('image').url + "\n";
        tmpValues = tmpValues + "Article image rejected? = " + !tmpRecord.get('image').rejected + "\n";

        alert(tmpValues);
    }

});
