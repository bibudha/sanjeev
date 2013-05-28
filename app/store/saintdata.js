Ext.define('saint1.store.saintdata', {
    extend: 'Ext.data.Store',
    
config:
{
	    model:'saint1.model.Loan',
//	      sorters: [
//        {
//            property : 'id',
//            direction: 'DESC'
//        }],
        autoLoad: true,
        remoteFilter: true
}
});