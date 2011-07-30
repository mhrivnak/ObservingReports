Ext.define('OB.view.About', {
	extend: 'Ext.window.MessageBox',
	alias: 'widget.about',
	autoShow: true,
	
	config: {	
		title: 'About',
		width: 80,
	
		msg: 'Observing Reports is a site where amateur astronomers can log their observations, share them, and make use of that data in the future.  ' +
		'This is an open source effort.  If you would like to contribute, please contact webmaster@observingreports.com!',
	},
	
	show: function() {
		this.callParent([this.config]);
	}
});