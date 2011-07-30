Ext.define('OB.model.Eyepiece', {
	extend: 'Ext.data.Model',
	fields: [
	    {name: 'key', type: 'string'},
	    {name: 'name', type: 'string'},
	    {name: 'make', type: 'string'},
	    {name: 'model', type: 'string'},
	    {name: 'focal_length', type: 'float'},
	    {name: 'favorite', type: 'boolean'}
	],
	idProperty: 'key'
});