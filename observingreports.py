import os

from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext import webapp
from google.appengine.dist import use_library

# must do this before anything imports django parts
use_library('django', '1.2')

import rest

import views
import models
import ajax

# Put us in debug mode only when using the development server
DEBUG = os.environ['SERVER_SOFTWARE'].startswith('Development')

application = webapp.WSGIApplication(
 	[
		('/', views.MainPage),
		('/rest/.*', rest.Dispatcher),
        ('/ajax/CurrentUser', ajax.CurrentUser),
        ('/ajax/CurrentUser/Eyepieces', ajax.CurrentUserEyepieces),
        ('/ajax/CurrentUser/ObservingSessions', ajax.CurrentUserObservingSessions),
        ('/ajax/CurrentUser/Telescopes', ajax.CurrentUserTelescopes),
        ('/ajax/Targets', ajax.Targets),
        ('/logout', views.Logout),
	],
	debug=DEBUG)

rest.Dispatcher.base_url = "/rest"
if DEBUG:
    rest.Dispatcher.add_models_from_module(models)

def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()
