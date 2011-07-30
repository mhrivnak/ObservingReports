Ext.define('OB.controller.current_user.ObservingSessions', {
	extend: 'Ext.app.Controller',
	
	models: [
	    'ObservingSession'
	],
		  	
	views: [
	    'my_sessions.List',
	    'my_sessions.Main'
	],
		
	stores: [
	    'current_user.ObservingSessions'
	],
	
	/*refs: [
       {
    	   ref: 'list',
    	   selector: 'mysessionslist'
       }
	],*/

});
