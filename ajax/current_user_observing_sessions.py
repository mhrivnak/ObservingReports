from google.appengine.ext import db

import models
import forms
from crud_handler import CRUDHandler

class CurrentUserObservingSessions(CRUDHandler):
    model = models.ObservingSession
    form = forms.ObservingSessionForm
