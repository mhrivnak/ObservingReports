Ext.define('OB.view.setup.telescope.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.telescopelist',
	title: 'Your Telescopes',
	store: 'current_user.Telescopes',
	
	requires: [
	    'Ext.toolbar.TextItem',
	],
	
	onSelectionChange: function(selModel, selections) {
		this.down('button[action="edit"]').setDisabled(selections.length === 0);
		this.down('button[action="delete"]').setDisabled(selections.length === 0);
	},
	
	initComponent: function() {
		this.columns = [
		    {header: 'Name', dataIndex:'name', flex:2},
		    {header: 'Make', dataIndex:'make', flex:2},
		    {header: 'Model', dataIndex:'model', flex:2},
		    {header: 'Focal Length (mm)', dataIndex:'focal_length', flex:1},
		    {header: 'Aperture (mm)', dataIndex:'aperture', flex:1},
		];
		
		Ext.apply(this, {
			iconCls: 'icon-grid',
			frame: true,
			dockedItems: [{
				xtype: 'toolbar',
				items: [
					{
						iconCls: 'icon-add',
						text: 'Add',
						action: 'add'
					},
					{
						iconCls: 'icon-edit',
						text: 'Edit',
						action: 'edit',
						disabled: true
					},
					{
						iconCls: 'icon-delete',
						text: 'Delete',
						action: 'delete',
						disabled: true
					}
				]
			}]
		});
		
		this.callParent(arguments);
		this.getSelectionModel().on('selectionchange', this.onSelectionChange, this);
	}
});