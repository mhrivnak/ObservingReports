from google.appengine.api import users
from google.appengine.ext import webapp

class Logout(webapp.RequestHandler):
    def get(self):
        self.redirect(users.create_logout_url('/'))
