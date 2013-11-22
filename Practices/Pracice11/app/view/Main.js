Ext.define('Practice11.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'form',
            width: 800,
            defaults: {
                anchor: '100%'
            },
            buttons: [
                {
                    text: 'Disabled and Read Only = false, value = new date',
                    handler: function(){
                        var tmpForm = this.up('form');
//                        Ext.suspendLayouts();
                        //Lets loop through the 45 fields of this beatiful form
                        var tmpFields = tmpForm.getForm().getFields();
                        for( var tmpIndex=0; tmpIndex < tmpFields.getCount(); tmpIndex++ ){
                            var tmpField = tmpFields.getAt(tmpIndex);
                            tmpField.setDisabled(false);
                            tmpField.setValue(new Date());
                            tmpField.setReadOnly(false);
                        }
//                        Ext.resumeLayouts();
                    }
                },
                {
                    text: 'Disabled and Read Only = true, value = null',
                    handler: function(){
                        var tmpForm = this.up('form');
//                        Ext.suspendLayouts();
                        //Lets loop through the 45 fields of this beatiful form
                        var tmpFields = tmpForm.getForm().getFields();
                        for( var tmpIndex=0; tmpIndex < tmpFields.getCount(); tmpIndex++ ){
                            var tmpField = tmpFields.getAt(tmpIndex);
                            tmpField.setDisabled(true);
                            tmpField.setValue(null);
                            tmpField.setReadOnly(true);
                        }
//                        Ext.resumeLayouts();
                    }
                }
            ],
            items: [
                {
                    xtype: 'container',
                    width: 800,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: 'anchor',
                            defaults: {
                                xtype: 'datefield',
                                anchor: '100%'
                            },
                            items: [
                                {
                                    fieldLabel: 'Field1'
                                },
                                {
                                    fieldLabel: 'Field2'
                                },
                                {
                                    fieldLabel: 'Field3'
                                },
                                {
                                    fieldLabel: 'Field4'
                                },
                                {
                                    fieldLabel: 'Field5'
                                },
                                {
                                    fieldLabel: 'Field6'
                                },
                                {
                                    fieldLabel: 'Field7'
                                },
                                {
                                    fieldLabel: 'Field8'
                                },
                                {
                                    fieldLabel: 'Field9'
                                },
                                {
                                    fieldLabel: 'Field10'
                                },
                                {
                                    fieldLabel: 'Field11'
                                },
                                {
                                    fieldLabel: 'Field12'
                                },
                                {
                                    fieldLabel: 'Field13'
                                },
                                {
                                    fieldLabel: 'Field14'
                                },
                                {
                                    fieldLabel: 'Field15'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: 'anchor',
                            defaults: {
                                xtype: 'datefield',
                                anchor: '100%'
                            },
                            items: [
                                {
                                    fieldLabel: 'Field16'
                                },
                                {
                                    fieldLabel: 'Field17'
                                },
                                {
                                    fieldLabel: 'Field18'
                                },
                                {
                                    fieldLabel: 'Field19'
                                },
                                {
                                    fieldLabel: 'Field20'
                                },
                                {
                                    fieldLabel: 'Field21'
                                },
                                {
                                    fieldLabel: 'Field22'
                                },
                                {
                                    fieldLabel: 'Field23'
                                },
                                {
                                    fieldLabel: 'Field24'
                                },
                                {
                                    fieldLabel: 'Field25'
                                },
                                {
                                    fieldLabel: 'Field26'
                                },
                                {
                                    fieldLabel: 'Field27'
                                },
                                {
                                    fieldLabel: 'Field28'
                                },
                                {
                                    fieldLabel: 'Field29'
                                },
                                {
                                    fieldLabel: 'Field30'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: 'anchor',
                            defaults: {
                                xtype: 'datefield',
                                anchor: '100%'
                            },
                            items: [
                                {
                                    fieldLabel: 'Field31'
                                },
                                {
                                    fieldLabel: 'Field32'
                                },
                                {
                                    fieldLabel: 'Field33'
                                },
                                {
                                    fieldLabel: 'Field34'
                                },
                                {
                                    fieldLabel: 'Field35'
                                },
                                {
                                    fieldLabel: 'Field36'
                                },
                                {
                                    fieldLabel: 'Field37'
                                },
                                {
                                    fieldLabel: 'Field38'
                                },
                                {
                                    fieldLabel: 'Field39'
                                },
                                {
                                    fieldLabel: 'Field40'
                                },
                                {
                                    fieldLabel: 'Field41'
                                },
                                {
                                    fieldLabel: 'Field42'
                                },
                                {
                                    fieldLabel: 'Field43'
                                },
                                {
                                    fieldLabel: 'Field44'
                                },
                                {
                                    fieldLabel: 'Field45'
                                }
                            ]
                        }
                    ]

                }
            ]
        }
    ]
});