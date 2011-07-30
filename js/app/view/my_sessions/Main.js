Ext.define('OB.view.my_sessions.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.mysessionsmain',
	layout: 'border',
	requires: [
   	    'Ext.layout.container.Border'
   	],
   	
   	items: [
	    {
	    	region: 'west',
	    	xtype: 'mysessionslist',
	    	width: 200
	    },
	    {
	    	region: 'center',
	    	xtype: 'container',
	    }
    ]
});