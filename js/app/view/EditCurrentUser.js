Ext.define('OB.view.EditCurrentUser', {
	extend: 'Ext.window.Window',
	alias: 'widget.editcurrentuser',
	requires: [
	    'Ext.form.Panel',
	    'Ext.form.field.Checkbox',
	    'Ext.form.field.Number'
	],
	
	title: 'Edit Profile',
	layout: 'fit',
	autoShow: true,
	
	initComponent: function() {
		this.items = [
		    {
		    	xtype: 'form',
		    	items: [
		    	    {
		    	    	xtype: 'textfield',
		    	    	name: 'first_name',
		    	    	fieldLabel: 'First Name',
		    	    	allowBlank: false
		    	    },
		    	    {
		    	    	xtype: 'textfield',
		    	    	name: 'last_name',
		    	    	fieldLabel: 'Last Name',
		    	    	allowBlank: false
		    	    },
		    	    {
		    	    	xtype: 'textfield',
		    	    	name: 'email',
		    	    	fieldLabel: 'Email',
		    	    	vtype: 'email'
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