Ext.define('Practice9.view.ValidateImageField', {

    extend: 'Ext.form.FieldContainer',

    xtype: 'validateimagefield',

    mixins: {
        field: 'Ext.form.field.Field'
    },

    statics: {
        DEFAULT_IMAGE_URL: 'resources/img/defaultimage.png'
    },

    value: null,

    initComponent: function(){
        this.items = [
            this.getUrlTextfieldConfig(),
            this.getImageConfig(),
            this.getIsValidCheckboxConfig()
        ];
        this.callParent(arguments);
        this.initMixins();
    },

    getUrlTextfieldConfig: function(){
        return {
            xtype: 'textfield',
            width: 200,
            itemId: 'txtUrl',
            listeners: {
                scope: this,
                blur: this.onUrlBlur
            }
        };
    },

    getImageConfig: function(){
        return {
            xtype: 'image',
            itemId: 'imgToValidate'
        };
    },

    getIsValidCheckboxConfig: function(){
        return {
            xtype: 'checkboxfield',
            itemId: 'chxIsValid',
            boxLabel: 'Is Valid?'
        };
    },

    initMixins: function(){
        this.initField();
    },

    afterRender: function(){
        this.callParent(arguments);
        this.cacheItems();
        this.initImageListeners();
    },

    cacheItems: function(){
        this.urlTextfield = this.down('textfield');
        this.image = this.down('image');
        this.isValidCheckbox = this.down('checkboxfield');
    },

    initImageListeners: function(){
        var that = this;
        var tmpImageEl = this.image.getEl();
        tmpImageEl.on('load',this.doLayout,this);
        tmpImageEl.on('error',this.onImageError,this);
    },

    onImageError: function(){
        this.value.url = Practice9.view.ValidateImageField.DEFAULT_IMAGE_URL;
        this.updateImage();
        this.updateTextfield();
        this.validate();
    },

    setValue: function(argValue){
        if( Ext.isEmpty(argValue) ){
            return this;
        }
        this.value = argValue;
        this.updateTextfield();
        this.updateImage();
        this.updateCheckbox();
        this.validate();
        return this;
    },

    updateTextfield: function(){
        this.urlTextfield.setValue(this.value.url);
    },

    updateImage: function(){
        this.image.setSrc(this.value.url);
    },

    updateCheckbox: function(){
        this.isValidCheckbox.setValue( !this.value.rejected );
    },

    getValue: function(){
        this.value.url = this.urlTextfield.getValue();
        this.value.rejected = this.isValidCheckbox.getValue();
        return this.value;
    },

    isValid: function(){
        if( Ext.isEmpty(this.value) || Ext.isEmpty(this.value.url) || this.value.url === Practice9.view.ValidateImageField.DEFAULT_IMAGE_URL ){
            return false;
        }
        return true;
    },

    onUrlBlur: function(){
        this.value.url = this.urlTextfield.getValue();
        this.updateImage();
    }

});