Ext.application({
	name: 'OB',
	appFolder: 'js/app',
	autoCreateViewport: false,
	controllers: [
	    'current_user.Eyepieces',
	    'current_user.ObservingSessions',
	    'current_user.Telescopes',
	    'CurrentUser',
	    'Main',
	],
	models: [
	    'CurrentUser',
	    'Eyepiece',
	    'ObservingSession',
	    'Target',
	    'Telescope'
	],
	requires: [
   	    'Ext.container.Viewport'
   	],
	
	launch: function() {
		
	}
});
