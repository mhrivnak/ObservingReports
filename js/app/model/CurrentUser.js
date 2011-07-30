Ext.define('OB.model.CurrentUser', {
	extend: 'Ext.data.Model',
	fields: [
 	    {name: 'key', type: 'string'},
 	    {name: 'first_name', type: 'string'},
 	    {name: 'last_name', type: 'string'},
 	    {name: 'email', type: 'string'}
 	],
	idProperty: 'key'
});