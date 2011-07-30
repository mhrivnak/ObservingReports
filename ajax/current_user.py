from google.appengine.api import users
from google.appengine.ext import db

import forms
import models
import decorators
from crud_handler import CRUDHandler

class CurrentUser(CRUDHandler):
    model = models.UserProfile
    form = forms.UserProfileForm

    @decorators.json
    def get(self):
        user = users.get_current_user()

        if not user:
            self.redirect(users.create_login_url(self.request.uri))
        else:
            user_profiles = db.GqlQuery("SELECT * FROM UserProfile WHERE useridentifier = :user_id", user_id=user.user_id())
            if user_profiles.count() == 0:
                user_profile = models.UserProfile(useridentifier=user.user_id(), email=user.email())
                user_profile.put()
            else:
                user_profile = user_profiles[0]

            return [user_profile.to_dict()]

    def post(self):
        return self.return_forbidden()

    def put(self):
        """
        Only allow the current user to update themself.
        """
        key = self.json_data['key']
        instance = self._get_model_instance(key)
        user = users.get_current_user()
        try:
            if models.UserProfile.get_current_profile().useridentifier != instance.useridentifier:
                return self.return_forbidden()
        except AttributeError:
            return self.return_forbidden()

        return super(CurrentUser, self).put()

    def delete(self):
        return self.return_forbidden()
