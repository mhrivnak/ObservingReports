Ext.define('OB.store.current_user.ObservingSessions', {
	extend: 'Ext.data.Store',
	model: 'OB.model.ObservingSession',
	storeId: 'current_user.ObservingSessions',
	autoLoad: true,
	autoSync: false,
	proxy: {
		type: 'ajax',
		url: '/ajax/CurrentUser/ObservingSessions',
		actionMethods: {
			'create' : 'POST',
			'read' : 'GET',
			'update' : 'PUT',
			'destroy' : 'DELETE'
		}
	}
});