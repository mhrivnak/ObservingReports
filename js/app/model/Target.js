Ext.define('OB.model.Target', {
	extend: 'Ext.data.Model',
	fields: [
	    {name: 'key', type: 'string'},
	    {name: 'name', type: 'string'},
	    {name: 'ic', type: 'int'},
	    {name: 'ngc', type: 'int'},
	    {name: 'messier', type: 'int'},
	    {name: 'type', type: 'int'}
	],
	idProperty: 'key'
});