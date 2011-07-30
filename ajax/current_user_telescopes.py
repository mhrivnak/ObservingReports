from google.appengine.ext import db

import models
import forms
from crud_handler import CRUDHandler

class CurrentUserTelescopes(CRUDHandler):
    model = models.Telescope
    form = forms.TelescopeForm
