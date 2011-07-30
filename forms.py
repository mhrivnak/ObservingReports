from google.appengine.ext.db import djangoforms

import models

class EyepieceForm(djangoforms.ModelForm):
    class Meta:
        model = models.Eyepiece
        exclude = ('owner',)

class LocationForm(djangoforms.ModelForm):
    class Meta:
        model = models.Location

class ObservationForm(djangoforms.ModelForm):
    class Meta:
        model = models.Observation

class ObservingSessionForm(djangoforms.ModelForm):
    class Meta:
        model = models.ObservingSession
        exclude = ('owner',)

class TelescopeForm(djangoforms.ModelForm):
    class Meta:
        model = models.Telescope
        exclude = ('owner',)

class UserProfileForm(djangoforms.ModelForm):
    class Meta:
        model = models.UserProfile
        exclude = ('useridentifier',)
