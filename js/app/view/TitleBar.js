Ext.define('OB.view.TitleBar', {
	extend: 'Ext.Panel',
	alias: 'widget.titlebar',
	layout: {
		type: 'hbox',
		align: 'top'
	},
	height: 70,
	items: [
	    {
	    	xtype: 'container',
	    	html: '<font size="8">Observing Reports</font>',
	    	flex: 1
	    },
	    {
	    	xtype: 'button',
	    	text: 'About',
	    	action: 'about'
	    },
	    {
	    	xtype: 'button',
	    	text: 'Profile',
	    	action: 'profile'
	    },
	    {
	    	xtype: 'button',
	    	text: 'Logout',
	    	action: 'logout'
	    }
    ]
});