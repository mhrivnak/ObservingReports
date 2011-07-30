Ext.define('OB.model.Telescope', {
	extend: 'Ext.data.Model',
	fields: [
	    {name: 'key', type: 'string'},
	    {name: 'name', type: 'string'},
	    {name: 'make', type: 'string'},
	    {name: 'model', type: 'string'},
	    {name: 'focal_length', type: 'float'},
	    {name: 'aperture', type: 'float'}
	],
	idProperty: 'key'
});