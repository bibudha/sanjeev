Ext.define('saint1.controller.appcontroller', {
    extend: 'Ext.app.Controller',
    
    config: {
    	  refs: {
            main: 'main',
            addButton: '#addButton',
            addView:'addView',
            loanslist:'loanslist',
            saveButton:'#saveButton',
            form:'#form',
            page:'#perpage',
            order:'#order'
        },
        
              control: {
              	main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
              addButton: {
                tap: 'onAddButton'
            },
            loanslist:
            {
            	 itemtap: 'onLoanListSelect'
            },
            saveButton:
            {
            	tap:'onSaveButton'
            }
              }
    },

    onMainPush: function(view, item) {
        var addButton = this.getAddButton();

        if (item.xtype == "addView") {
        var saveButton = this.getSaveButton();
      //    var order = this.getOrder();
     //     var perpage=this.getPage();
     //     perpage.hide();
            this.hideAddButton();
            saveButton.show();
    //        order.hide();
        } else {
            this.showAddButton();
        }
    },

    onMainPop: function(view, item) {
        if (item.xtype == "addView") {
        	     var saveButton = this.getSaveButton();
        	     saveButton.hide();
        //	       var order = this.getOrder();
        //  var perpage=this.getPage();
        //  perpage.show();
       //   order.show();
            this.showAddButton();
        } 
    },
        showAddButton: function() {
        var addButton = this.getAddButton();
        addButton.show();
    },
        hideAddButton: function() {
        var addButton = this.getAddButton();
        addButton.hide();
    },

    
       onAddButton: function() {
    	 alert('onContactEdit Call');
        if (!this.addView) {
            this.addView = Ext.create('saint1.view.addView');
        }
        this.getMain().push(this.addView);
    },
   onSaveButton:function()
   	{
   //var form=this.getForm();
   //alert(form);
   Ext.util.JSONP.request({
    url: 'http://saintbrightmoon.com/reg_webservice/xmldemo/json_sanjeev.php',
         method: 'POST',
             params: {
        username: 'Ed',
        password: 'bad place for a password'
    },
  //  var form = this.getFormPanel();
   // alert(form);
    withCredentials: true,
    useDefaultXhrHeader: false,
    callback: function(response, successful) {
        if (successful) {
            Ext.Msg.alert('Success', 'We got your form submission');
        } else {
            Ext.Msg.alert('Fail', 'Hmm, that did not work');
        }
    }
});
        this.getMain().pop();
    },
   
    onLoanListSelect:function(list, index, node, record){
    	alert('onLoanListSelect');
    	   if (!this.addView) {
            this.addView = Ext.create('saint1.view.addView');
        }
            this.addView.setRecord(record);
        this.getMain().push(this.addView);
    }


});