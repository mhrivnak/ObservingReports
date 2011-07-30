Ext.define('OB.controller.current_user.Eyepieces', {
	extend: 'Ext.app.Controller',
	
	models: [
	    'Eyepiece'
	],
		  	
	views: [
	    'setup.eyepiece.List',
	    'setup.eyepiece.Edit'
	],
		
	stores: [
	    'current_user.Eyepieces'
	],
	
	refs: [
       {
    	   ref: 'list',
    	   selector: 'eyepiecelist'
       }
	],
	
	init: function() {
		this.control({
			'eyepiecelist': {
				itemdblclick: this.editEyepieceFromClick
			},
			'eyepieceedit button[action=save]': {
				click: this.updateEyepiece
			},
			'eyepiecelist button[action=delete]': {
				click: this.deleteEyepiece
			},
			'eyepiecelist button[action=edit]': {
				click: this.editEyepieceFromButton
			},
			'eyepiecelist button[action=add]': {
				click: this.addEyepiece
			}
		});
	},

	editEyepieceFromClick: function(grid, record) {
		var view = Ext.widget('eyepieceedit');
		view.down('form').loadRecord(record);
	},
	
	editEyepieceFromButton: function(button) {
		var view = Ext.widget('eyepieceedit');
		var record = this.getList().getSelectionModel().getSelection()[0];
		view.down('form').loadRecord(record);
	},
	
	deleteEyepiece: function(button) {
		var selected = this.getList().getSelectionModel().getSelection();
		for (item in selected)
		{
			this.getList().store.remove(selected[item]);
		}
		this.getList().store.sync();
	},
	
	updateEyepiece: function(button) {
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
			var EyepieceModel = this.getEyepieceModel();
			var eyepiece = new EyepieceModel(values);
			this.getList().store.add(eyepiece);
		}
		// we are updating an existing record
		else
		{
			record.set(values);
		}
		this.getList().store.sync();
		
		win.close();
	},
	
	addEyepiece: function() {
		var view = Ext.widget('eyepieceedit');
		
	}
});
