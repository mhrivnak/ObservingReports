from google.appengine.ext import db
from google.appengine.api import users

class UserProfile(db.Model):
    """
    GAE's User model is problematic, because it's primary key is subject to change
    if the user changes their email address.  Ugh!  It does have a unique,
    non-changing key, but that it not what they choose to use as a PK.  Well screw
    that.  To avoid sending that key back and forth in requests, we are giving
    users their own profile object with PK here and will not make a relationship to
    an object whose PK might change.  Upon login, we will check the user_id to look
    for an existing profile and go from there.
    """
    useridentifier = db.StringProperty(required=True)
    first_name = db.StringProperty()
    last_name = db.StringProperty()
    email = db.StringProperty()

    @staticmethod
    def get_current_profile():
        user = users.get_current_user()
        return UserProfile.all().filter('useridentifier =', user.user_id()).get()

    def to_dict(self, excluded_fields=None):
        ret = {
            'key': str(self.key()),
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
        }
        if excluded_fields is not None:
            for field_name in excluded_fields:
                del ret[field_name]
        return ret

    
class Eyepiece(db.Model):
    owner = db.ReferenceProperty(UserProfile)
    name = db.StringProperty(required=True)
    make = db.StringProperty(required=True)
    model = db.StringProperty(required=True)
    focal_length = db.FloatProperty(required=True)
    favorite = db.BooleanProperty()

    def put(self, *args, **kwargs):
        if self.owner == None:
            self.owner = UserProfile.get_current_profile()
        super(Eyepiece, self).put(*args, **kwargs)

    def to_dict(self, excluded_fields=None):
        ret = {
            'key': str(self.key()),
            'name': self.name,
            'make': self.make,
            'model': self.model,
            'favorite': self.favorite,
            'focal_length': self.focal_length,
        }
        if excluded_fields is not None:
            for field_name in excluded_fields:
                del ret[field_name]
        return ret
        

class Telescope(db.Model):
    owner = db.ReferenceProperty(UserProfile)
    name = db.StringProperty()
    make = db.StringProperty()
    model = db.StringProperty()
    focal_length = db.IntegerProperty() # in millimeters
    aperture = db.IntegerProperty() # in millimeters

    def to_dict(self, excluded_fields=None):
        ret = {
            'key': str(self.key()),
            'name': self.name,
            'make': self.make,
            'model': self.model,
            'focal_length': self.focal_length,
            'aperture': self.aperture,
        }
        if excluded_fields is not None:
            for field_name in excluded_fields:
                del ret[field_name]
        return ret


class Target(db.Model):
    """
    Objects to look at.  Astronomers would call this an "Object", but that's a poor
    choice of name in an OO language like python, so we call it "Target".

    borrowing this data from the KStars project.

    https://projects.kde.org/projects/kde/kdeedu/kstars/repository/revisions/master/changes/kstars/data/ngcic.dat
    """
    # International Catalog
    ic = db.IntegerProperty()

    # Messier Catalog Number
    messier = db.IntegerProperty()

    # New Galactic Catalog Number
    ngc = db.IntegerProperty()

    # Common, human-readable name i.e. "Ring Nebula", "Double Cluster", etc.
    name = db.StringProperty()

    # An integer index for a list of types, mapping to be determined later. Data found
    # in the source above.
    type = db.IntegerProperty()

    def to_dict(self, excluded_fields=None):
        ret = {
            'key' : str(self.key()),
            'ic' : self.ic,
            'messier' : self.messier,
            'ngc' : self.ngc,
            'name' : self.name,
            'type' : self.type,
        }
        if excluded_fields is not None:
            for field_name in excluded_fields:
                del ret[field_name]
        return ret


class Location(db.Model):
    name = db.StringProperty()
    added_by = db.ReferenceProperty(UserProfile)
    added_date = db.DateTimeProperty()
    # TODO add fields for physical location


class ObservingSession(db.Model):
    title = db.StringProperty()
    owner = db.ReferenceProperty(UserProfile)
    location = db.ReferenceProperty(Location)
    start = db.DateTimeProperty()
    end = db.DateTimeProperty()
    description = db.TextProperty()

    def to_dict(self, excluded_fields=None):
        ret = {
            'key': str(self.key()),
            'title': self.title,
            'location': self.location,
            'start': self.start,
            'end': self.end,
            'description': self.description,
        }
        if excluded_fields is not None:
            for field_name in excluded_fields:
                del ret[field_name]
        return ret


class Observation(db.Model):
    session = db.ReferenceProperty(ObservingSession)
    targets = db.ListProperty(db.Key)
    eyepieces = db.ListProperty(db.Key)
    telescope = db.ReferenceProperty(Telescope)

    # always local time
    date_time = db.DateTimeProperty()

    description = db.TextProperty()
