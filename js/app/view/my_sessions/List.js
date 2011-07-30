Ext.define('OB.view.my_sessions.List', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.mysessionslist',
	layout: 'fit',
	title: 'Sessions',
	requires: [
	    'Ext.view.View',
	    'Ext.panel.Panel'
	],
	
	items: [
	   {
		   xtype: 'dataview',
	       store: 'current_user.ObservingSessions',
	       trackOver: true,
	       itemSelector: '.observing-session-item',
	       overItemCls: 'observing-session-item-hover',
	       tpl: '<tpl for="."><div class="observing-session-item">{title}</div></tpl>'
        }
        
	]
});