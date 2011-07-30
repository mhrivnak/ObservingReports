Ext.define('OB.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: [
        'CurrentUser',
        'current_user.Eyepieces',
        'current_user.Telescopes'
    ],
    
    views: [
        'About',
        'EditCurrentUser',
        'Main',
        'SetupTabs',
        'TabNavigator',
        'TitleBar'
    ],
    
    init: function() {
        this.getCurrentUserStore().on('load', this.onCurrentUserLoaded, this);
        this.getCurrentUserStore().load();
        
        this.control({
			'titlebar button[action=logout]': {
				click: this.onLogout
			},
			'titlebar button[action=about]': {
				click: this.onAbout
			},
			'titlebar button[action=profile]': {
				click: this.onProfile
			}
		});
    },

    // If no profile data, this would be a good time to ask for it.
	onCurrentUserLoaded: function(store, data, success, operation) {
    	var currentUser = store.first();
    	var key = currentUser.getId();

    	// Have all dependent stores load now
    	this.getStore('current_user.Eyepieces').load();
    	this.getStore('current_user.Telescopes').load();
    	
    	this.launchMainView();
    },
    
    onLogout: function(button) {
    	window.location = '/logout';
    },
    
    onAbout: function(button) {
    	var view = Ext.widget('about');
    },
    
    onProfile: function(button) {
    	var view = Ext.widget('editcurrentuser');
    	var record = this.getCurrentUserStore().first();
		view.down('form').loadRecord(record);
    },
    
    launchMainView: function() {
    	Ext.create('OB.view.Main', {});
    }
});