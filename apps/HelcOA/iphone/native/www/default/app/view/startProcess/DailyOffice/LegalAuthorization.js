
/* JavaScript content from app/view/startProcess/DailyOffice/LegalAuthorization.js in folder common */
/*
 * File: app/view/DailyOffice15.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcOA.view.startProcess.DailyOffice.LegalAuthorization', {
    extend: 'Ext.Panel',
     id:'LegalAuthorization_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.TextArea'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '法人授权委托证明、法人证明书申请审批',
                items: [
{
    xtype: 'button',
    ui: 'back',
    text: '返回',
    listeners:{
    	tap:function(){
    		var obj=Ext.getCmp('StartprocessName_id');
    		if(!obj){
    			obj=Ext.create('HelcOA.view.startProcess.StartprocessName');
    		}
    		Ext.Viewport.setActiveItem(obj);
    	}
    }
},
{
    xtype: 'spacer'
},
{
    xtype: 'button',
    handler: function(button, e) {
        var menu = Ext.create('Ext.Menu', {
            items: [
            {
                text: '提交',
                listeners:{
                	tap:function(){
                		var obj=Ext.getCmp('LegalAuthorizationCommit_id');
                		if(!obj){
                			obj=Ext.create('HelcOA.view.startProcess.DailyOffice.LegalAuthorizationCommit');
                		}
                		Ext.Viewport.setActiveItem(obj);
                		
                	}
                },
                handler:function(button,e){
                	 Ext.Viewport.hideMenu('right');
                	 
                }
            },
            {
                text: '保存',
                handler:function(button,e){
               	 Ext.Viewport.hideMenu('right');
               	 
               }
            },
            {
                text: '意见',
                handler:function(button,e){
               	 Ext.Viewport.hideMenu('right');
               	 
               }
            }
            ]
        });

        Ext.Viewport.setMenu(menu, {
            side: 'right',
            reveal: false
        });

        Ext.Viewport.showMenu('right');
    },
    itemId: 'mybutton2',
    iconCls: 'more'
}
                ]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                items: [
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '编号',
                                labelWidth: '40%',
                                placeHolder: '请输入编号'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '申请人',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入申请人姓名'
                            },
                            {
                                xtype: 'textfield',
                                label: '申请部门',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入申请部门名称'
                            },
                            {
                                xtype: 'datepickerfield',
                                label: '申请日期',
                                labelWidth: '40%',
                                placeHolder: '请输入申请日期',
                                picker: {
                                    doneButton: '完成',
                                    cancelButton: '取消'
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '被授权人',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入被授权人姓名'
                            },
                            {
                                xtype: 'textfield',
                                label: '联系电话',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入联系电话'
                            },
                            {
                                xtype: 'datepickerfield',
                                label: '完成日期',
                                labelWidth: '40%',
                                placeHolder: '请输入期望完成日期',
                                picker: {
                                    doneButton: '完成',
                                    cancelButton: '取消'
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'selectfield',
                                label: '法人证明书',
                                labelWidth: '40%',
                                placeHolder: '是否开具法人证明书',
                                options: [
                                    {
                                        text: '是',
                                        value: '是'
                                    },
                                    {
                                        text: '否',
                                        value: '否'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '有效期(年月)',
                        items: [
                            {
                                xtype: 'datepickerfield',
                                label: '开始',
                                labelWidth: '40%',
                                placeHolder: '请输入有效期开始时间',
                                picker: {
                                    doneButton: '完成',
                                    cancelButton: '取消'
                                }
                            },
                            {
                                xtype: 'datepickerfield',
                                label: '结束',
                                labelWidth: '40%',
                                placeHolder: '请输入有效期结束时间',
                                picker: {
                                    doneButton: '完成',
                                    cancelButton: '取消'
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textareafield',
                                label: '申请权限',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入申请权限'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});