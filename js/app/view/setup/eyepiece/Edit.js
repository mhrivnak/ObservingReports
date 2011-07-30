Ext.define('OB.view.setup.eyepiece.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.eyepieceedit',
	requires: [
	    'Ext.form.Panel',
	    'Ext.form.field.Checkbox',
	    'Ext.form.field.Number'
	],
	
	title: 'Edit Eyepiece',
	layout: 'fit',
	autoShow: true,
	
	initComponent: function() {
		this.items = [
		    {
		    	xtype: 'form',
		    	items: [
		    	    {
		    	    	xtype: 'textfield',
		    	    	name: 'name',
		    	    	fieldLabel: 'Name',
		    	    	allowBlank: false
		    	    },
		    	    {
		    	    	xtype: 'textfield',
		    	    	name: 'make',
		    	    	fieldLabel: 'Make',
		    	    	allowBlank: false
		    	    },
		    	    {
		    	    	xtype: 'textfield',
		    	    	name: 'model',
		    	    	fieldLabel: 'Model',
		    	    	allowBlank: false
		    	    },
		    	    {
		    	    	xtype: 'numberfield',
		    	    	name: 'focal_length',
		    	    	fieldLabel: 'Focal Length (mm)',
		    	    	allowBlank: false,
		    	    	minValue: 0
		    	    },
		    	    {
		    	    	xtype: 'checkbox',
		    	    	name: 'favorite',
		    	    	fieldLabel: 'Favorite',
		    	    	inputValue: true,
		    	    	uncheckedValue: false
		    	    }
		    	]
		    }
	    ];
		
		this.buttons = [
		    {
		    	text: 'Save',
		    	action: 'save'
		    },
		    {
		    	text: 'Cancel',
		    	scope: this,
		    	handler: this.close
		    }
		];
		
		this.callParent(arguments);
	}
});