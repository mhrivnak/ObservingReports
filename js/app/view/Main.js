Ext.define('OB.view.Main', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.main',
	requires: [
	    'Ext.layout.container.Border'
	],
	layout: 'border',
	items: [
	    {
	    	region: 'north',
	    	xtype: 'titlebar',
	    	autoHeight: true
	    },
	    {
	    	region: 'west',
	    	collapsible: true,
	    	title: 'Recent Activity',
	    	width: 180
	    },
	    {
	    	region: 'center',
	    	xtype: 'tabnavigator'
	    },
	    {
	    	region: 'south',
	    	xtype: 'container',
	    	html: '<center>Copyright 2011 Michael Hrivnak</center>'
	    }
    ]
});