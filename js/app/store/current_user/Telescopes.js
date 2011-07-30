Ext.define('OB.store.current_user.Telescopes', {
	extend: 'Ext.data.Store',
	model: 'OB.model.Telescope',
	storeId: 'current_user.Telescopes',
	autoLoad: false,
	autoSync: false,
	         
	proxy: {
		type: 'ajax',
		url: '/ajax/CurrentUser/Telescopes',
		actionMethods: {
			'create' : 'POST',
			'read' : 'GET',
			'update' : 'PUT',
			'destroy' : 'DELETE'
		}
	}
});
