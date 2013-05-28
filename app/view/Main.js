Ext.define('saint1.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'saint1.view.addView',  
        'saint1.view.LoanList'
    ],

    config:
    {  
          autoDestroy: false,
         
        navigationBar: {
        
            items: [
//              {
//                                       xtype: 'selectfield', 
//                                       id:'perpage',
//                                       align: 'left',
//                                       options: [
//                                              {text: 'Records Per Page',  value: ''},
//                                              {text: 'All',  value: 'All'},
//                                              {text: '10', value: '10'},
//                                              {text: '20',  value: '20'},
//                                              {text: '50',  value: '50'},
//                                              {text: '100',  value: '100'},
//                                              {text: '1000',  value: '1000'}
//                                                 ]
//                                   },
//                
//                                   {
//                                       xtype: 'selectfield',
//                                       id:'order',
//                                       align: 'left',
//                                           options: [
//                                                 {text: 'Page Order',  value: ''},
//                                                 {text: 'Ascending',  value: 'Ascending'},
//                                                 {text: 'Descending', value: 'Descending'}
//                                                    ]
//                                   }, 
            {
                    xtype: 'button',
                    id: 'addButton',
                    align: 'right',
                    iconCls:'add',
                    iconMask:true,
                    hidden: false,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                },
                {
                    xtype: 'button',
                    id:'saveButton',
                    text: 'Save',
                    align: 'right',
                    hidden: true
                    
                }
            ]
        },

    	
    	     items:[
    	       { xtype: 'loanslist' }
         
    	     ]
 

             

         
    
    }
});
