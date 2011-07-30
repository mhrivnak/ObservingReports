Ext.define('OB.store.CurrentUser', {
	extend: 'Ext.data.Store',
	model: 'OB.model.CurrentUser',
	storeId: 'CurrentUser',
	autoLoad: false,
	autoSync: false,

	proxy: {
		type: 'ajax',
		url: '/ajax/CurrentUser',
		actionMethods: {
			'create' : 'POST',
			'read' : 'GET',
			'update' : 'PUT',
			'destroy' : 'DELETE'
		}
	}
});