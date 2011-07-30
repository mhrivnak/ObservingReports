from google.appengine.ext import db

import models
import forms
from crud_handler import CRUDHandler

class CurrentUserEyepieces(CRUDHandler):
    model = models.Eyepiece
    form = forms.EyepieceForm
