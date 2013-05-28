Ext.define('saint1.view.addView', {
    extend: 'Ext.form.Panel',
   
        xtype:'addView',
            requires: [
                    'Ext.form.*',
                    'Ext.field.*',
                    'Ext.Button',
                    'Ext.Toolbar',
                    'Ext.data.Store'
                      ],   
    config: {  
    	        layout: 'fit',
        items: [
            {
                xtype: 'formpanel',
                id:'form',
                items:[ 
                      	{
                                        xtype: 'fieldset',
                                        title: 'Record Details',
                                       
                                        instructions: 'Please enter the information above.',
                                         defaults: {
                                                     required: true,
                                                      labelAlign: 'left',
                                                      labelWidth: '30%'
                             },
                                     items: [
                                             	{
                                                     xtype: 'selectfield',
                                                     name: 'type',
                                                     label:'Type',
                                                    
                                                     options: [
                                                               {text: 'select',  value: ''},
                                                               {text: '1', value: 'First'},
                                                               {text: '2',  value: 'Second'},
                                                               {text: '3',  value: 'Third'},
                                                               {text: '4',  value: 'Fourh'},
                                                               {text: '5',  value: 'Fifth'}
                                                              ]
                                             	},
                                                 {
                                                xtype: 'selectfield',
                                                name: 'symbol',
                                                label:'Symbol',
                                                     options: [
                                                               {text: 'select',  value: ''},
                                                               {text: 'A', value: 'First'},
                                                               {text: 'B',  value: 'Second'},
                                                               {text: 'C',  value: 'Third'},
                                                               {text: 'D',  value: 'Fourth'},
                                                               {text: 'E',  value: 'Fifth'}
                                                              ]
                                               },
                    {
                        xtype: 'datepickerfield',
                        name: 'timestamp',
                        label: 'Start Date',
                        value: new Date(),
                        picker: {
                            yearFrom: 1990
                        }
                    },
                    {
                        xtype: 'textfield',
                        name: 'title',
                        label: 'Title'  
                    },
                  {
                        xtype: 'togglefield',
                      
                      
                      	value:'1',
                      
                 
                        label: 'Approved'
                    },
                         {
                           xtype: 'fieldset',
                     
                           items: [
                                     {
                                          xtype: 'numberfield',
                                          name: 'open',
                                          label: 'Open'
                                     },
                                     {
                                          xtype: 'numberfield',
                                          name: 'high',
                                          label: 'High'
                                     },
                                     {
                                           xtype: 'numberfield',
                                           name: 'close',
                                           label: 'Close'
                                     },
                                     {
                                           xtype: 'numberfield',
                                           name: 'change',
                                           label: 'Change'
                                     }
                                 ]
                         },
             {
                xtype: 'fieldset',
                items: [
                                 {
                                    xtype: 'numberfield',
                                    name: 's1',
                                    label: 'S1'
                                 },
                                 {
                                    xtype: 'numberfield',
                                    name: 's2',
                                    label: 'S2'
                                 },
                                 {
                                     xtype: 'numberfield',
                                     name: 's3',
                                     label: 'S3'
                                 },
                                 {
                                     xtype: 'numberfield',
                                     name: 'r1',
                                     label: 'R1'
                                 },
                                 {
                                      xtype: 'numberfield',
                                      name: 'r2',
                                      label: 'R2'
                                 },
                                 {
                                       xtype: 'numberfield',
                                       name: 'r3',
                                       label: 'R3'
                                 }
                        ]
            },
                 {
                        xtype: 'textareafield',
                        name: 'main_message',
                        label: 'Main Message',
                        maxRows: 5
                    },
                    {
                     xtype: 'fieldset',
                     title:'Trend Directions',
                              items: [
                              	                  {
                                                     xtype: 'selectfield',
                                                       name: 'trend_Short',
                                                       label:'Short',
                                                       options: [
                                                               {text: 'select',  value: ''},
                                                               {text: 'SH1', value: '1'},
                                                               {text: 'SH2',  value: '2'},
                                                               {text: 'SH3',  value: '3'},
                                                               {text: 'SH4',  value: '4'},
                                                               {text: 'SH5',  value: '5'}
                                                              ]
                                             	    },
                                             	        {
                                                     xtype: 'selectfield',
                                                       name: 'trend_Medium',
                                                       label:'Medium',
                                                       options: [
                                                               {text: 'select',  value: ''},
                                                               {text: 'MD1', value: '1'},
                                                               {text: 'MD2',  value: '2'},
                                                               {text: 'MD3',  value: '3'},
                                                               {text: 'MD4',  value: '4'},
                                                               {text: 'MD5',  value: '5'}
                                                              ]
                                             	    },
                                             	            {
                                                     xtype: 'selectfield',
                                                       name: 'trend_Long',
                                                       label:'Long',
                                                       options: [
                                                               {text: 'select',  value: ''},
                                                               {text: 'Ln1', value: '1'},
                                                               {text: 'Ln2',  value: '2'},
                                                               {text: 'Ln3',  value: '3'},
                                                               {text: 'Ln4',  value: '4'},
                                                               {text: 'Ln5',  value: '5'}
                                                              ]
                                             	    }
                                     ]
            
                    },
                                    {
                     xtype: 'fieldset',
                     title:'Recommendation:Short',
                              items: [
                              	              {
                                                       xtype: 'textfield',
                                                        name: 'recomded_valuea',
                                                        label: '1:'
                              	              },
                                             	       {
                                                       xtype: 'textfield',
                                                        name: 'recomded_valueb',
                                                        label: '2:'
                              	              },
                                             	            {
                                                       xtype: 'textfield',
                                                        name: 'recomded_valuec',
                                                        label: '3:'
                              	              }
                                     ]
            
                    },
                                     {
                     xtype: 'fieldset',
                     title:'Recommendation:Long',
                              items: [
                              	              {
                                                       xtype: 'textfield',
                                                        name: 'recomded_valuex',
                                                        label: '1:'
                              	              },
                                             	       {
                                                       xtype: 'textfield',
                                                        name: 'recomded_valuey',
                                                        label: '2:'
                              	              },
                                             	            {
                                                       xtype: 'textfield',
                                                        name: 'recomded_valuez',
                                                        label: '3:'
                              	              }
                                     ]
            
                    },
                                        {
                                       xtype: 'fieldset',
                                    title:'Recommendation:Comments',
                              items: [
                              	             {
                                                   xtype: 'textareafield',
                                                   name: 'Comment',
                                                   label: 'Comments',
                                                    maxRows: 5
                                             }    	       
                                     ]
                    }   
 
                ]
            }
                ] 
            }]
            }
            

});