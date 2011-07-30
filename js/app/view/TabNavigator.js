Ext.define('OB.view.TabNavigator', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.tabnavigator',
	items: [
	    {
			title: 'Home'
		},
		{
			title: 'My Sessions',
			xtype: 'mysessionsmain'
		},
		{
			title: 'Setup',
			xtype: 'setuptabs'
		}
	]
});