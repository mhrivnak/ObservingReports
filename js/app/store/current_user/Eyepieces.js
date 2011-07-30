Ext.define('OB.store.current_user.Eyepieces', {
	extend: 'Ext.data.Store',
	model: 'OB.model.Eyepiece',
	storeId: 'current_user.Eyepieces',
	autoLoad: false,
	autoSync: false,
	         
	proxy: {
		type: 'ajax',
		url: '/ajax/CurrentUser/Eyepieces',
		actionMethods: {
			'create' : 'POST',
			'read' : 'GET',
			'update' : 'PUT',
			'destroy' : 'DELETE'
		}
	}
});