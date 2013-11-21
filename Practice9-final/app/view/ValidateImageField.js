Ext.define('Practice9.view.ValidateImageField', {

    extend: 'Ext.form.FieldContainer',

    xtype: 'validateimagefield',

    mixins: {
        field: 'Ext.form.field.Field'
    },

    value: null,

    items: [
        {
            xtype: 'image',
            itemId: 'imgToValidate'
        },
        {
            xtype: 'checkboxfield',
            itemId: 'chxIsValid',
            boxLabel: 'Is Valid?'
        }
    ],

    initComponent: function(){
        this.callParent(arguments);
        this.initMixins();
    },

    initMixins: function(){
        this.initField();
    },

    afterRender: function(){
        this.callParent(arguments);
        this.initImageListeners();
    },

    initImageListeners: function(){
        var that = this;
        var tmpImageEl = this.down('image').getEl();
        tmpImageEl.on('load',this.doLayout,this);
    },

    setValue: function(argValue){
        if( Ext.isEmpty(argValue) ){
            return this;
        }
        this.value = argValue;
        this.updateImage();
        this.updateCheckbox();
        return this;
    },

    updateImage: function(){
        var tmpImage = this.down('image');
        tmpImage.setSrc(this.value.url);
    },

    updateCheckbox: function(){
        var tmpCheckbox = this.down('checkboxfield');
        tmpCheckbox.setValue( !this.value.rejected );
    },

    getValue: function(){
        var tmpCheckbox = this.down('checkboxfield');
        this.value.rejected = tmpCheckbox.getValue();
        return this.value;
    }

});



