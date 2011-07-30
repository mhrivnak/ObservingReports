Ext.define('OB.view.SetupTabs', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.setuptabs',
	items: [
		{
			title: 'Eyepieces',
			xtype: 'eyepiecelist'
		},
		{
			title: 'Telescopes',
			xtype: 'telescopelist'
		}
	]
});