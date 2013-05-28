Ext.define('saint1.model.Loan', {
    extend: 'Ext.data.Model',
        config: {
               fields: [ 'id','reg_id','type','symbol','save_date','timestamp','created','last_edited','title','open','is_deleted','high','low',
                         'close','change','approval','s1','s2','s3','r1','r2','r3','main_message','trend_Short','trend_Medium','trend_Long','recomded_valuea','recomded_valueb','recomded_valuec','recomded_valuex','recomded_valuey','recomded_valuez',
                 'Comment','recomdeurl1','recomdeurl2','recomdeurl3'],
                     autoLoad: true,
                     proxy: {
                             type: 'jsonp',
                             url: 'http://saintbrightmoon.com/reg_webservice/xmldemo/json_sanjeev.php?symbol=IBM&callback=?',
                                         reader: {
                                                    type: 'json',
                                                    rootProperty: 'response'
                                                  }
                              }    
    }
});