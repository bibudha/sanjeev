Ext.define('saint1.view.LoanList', {
    extend: 'Ext.List',
    xtype : 'loanslist',
    requires: [
          'Ext.data.proxy.Rest',
               'Ext.data.proxy.JsonP',      
               'Ext.MessageBox',
               'Ext.data.Store'
            
    ],

    config: {
        title: 'Records',
            styleHtmlContent:'true',
             store: 'saintdata',
             itemTpl:['<table border="1">',          
                    '<tr>',
                        '<td width="140" align="center">{id}</td>',
                        '<td width="140" align="center">{type}</td>',
                        '<td width="140" align="center">{timestamp}</td>',
                        '<td width="140" align="center">{title}</td>',
                        '<td width="140" align="center">{Comment}</td>',
                        '<td width="140" align="center">{approval}</td>',                       
                       
                    '</tr>',
                '</table>'].join('')  
    }
    



});
