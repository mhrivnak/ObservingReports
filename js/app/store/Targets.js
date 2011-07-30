Ext.define('OB.store.Targets', {
	extend: 'Ext.data.Store',
	model: 'OB.model.Target',
	storeId: 'Target',
	autoLoad: true,
	         
	proxy: {
		type: 'ajax',
		url: '/ajax/Targets',
	}
});