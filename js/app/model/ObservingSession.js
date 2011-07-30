Ext.define('OB.model.ObservingSession', {
	extend: 'Ext.data.Model',
	fields: [
	    {name: 'key', type: 'string'},
	    {name: 'title', type: 'string'},
	    {name: 'owner', type: 'string'},
	    {name: 'start', type: 'date'},
	    {name: 'end', type: 'date'},
	    {name: 'description', type: 'string'}
	],
	idProperty: 'key'
});