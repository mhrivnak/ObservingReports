Ext.define('OB.controller.CurrentUser', {
	extend: 'Ext.app.Controller',
	
	models: [
	    'CurrentUser',
	],
		  	
	views: [
	    'EditCurrentUser'
	],
		
	stores: [
	    'CurrentUser',
	],
	
	init: function() {
		this.control({
			'editcurrentuser button[action=save]': {
				click: this.onSave
			}
		});
	},
	
	onSave: function(button) {
		var win = button.up('window'),
			form = win.down('form'),
			record = form.getRecord(),
			values = form.getValues();
		
		if (!form.getForm().isValid())
		{
			return;
		}
		
		record.set(values);
		this.getCurrentUserStore().sync();
		win.close();
	}
});