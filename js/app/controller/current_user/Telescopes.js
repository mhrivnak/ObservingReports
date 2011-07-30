Ext.define('OB.controller.current_user.Telescopes', {
	extend: 'Ext.app.Controller',
	
	models: [
	    'Telescope'
	],
		  	
	views: [
	    'setup.telescope.List',
	    'setup.telescope.Edit'
	],
		
	stores: [
	    'current_user.Telescopes'
	],
	
	refs: [
       {
    	   ref: 'list',
    	   selector: 'telescopelist'
       }
	],
	
	init: function() {
		this.control({
			'telescopelist': {
				itemdblclick: this.editTelescopeFromClick
			},
			'telescopeedit button[action=save]': {
				click: this.updateTelescope
			},
			'telescopelist button[action=delete]': {
				click: this.deleteTelescope
			},
			'telescopelist button[action=edit]': {
				click: this.editTelescopeFromButton
			},
			'telescopelist button[action=add]': {
				click: this.addTelescope
			}
		});
	},

	editTelescopeFromClick: function(grid, record) {
		var view = Ext.widget('telescopeedit');
		view.down('form').loadRecord(record);
	},
	
	editTelescopeFromButton: function(button) {
		var view = Ext.widget('telescopeedit');
		var record = this.getList().getSelectionModel().getSelection()[0];
		view.down('form').loadRecord(record);
	},
	
	deleteTelescope: function(button) {
		var selected = this.getList().getSelectionModel().getSelection();
		for (item in selected)
		{
			this.getList().store.remove(selected[item]);
		}
		this.getList().store.sync();
	},
	
	updateTelescope: function(button) {
		var win = button.up('window'),
			form = win.down('form'),
			record = form.getRecord(),
			values = form.getValues();
		
		if (!form.getForm().isValid())
		{
			return;
		}
		
		// we are creating a new record
		if (record == null)
		{
			var TelescopeModel = this.getTelescopeModel();
			var telescope = new TelescopeModel(values);
			this.getList().store.add(telescope);
		}
		// we are updating an existing record
		else
		{
			record.set(values);
		}
		this.getList().store.sync();
		
		win.close();
	},
	
	addTelescope: function() {
		var view = Ext.widget('telescopeedit');
		
	}
});
