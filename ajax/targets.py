from google.appengine.ext import webapp
from google.appengine.api import memcache

import decorators
import models

class Targets(webapp.RequestHandler):
    TARGETS_KEY = 'Targets'
    CACHE_LIFE = 60*60*24 # 1 day

    @decorators.json
    def get(self):
        ret = memcache.get(self.TARGETS_KEY)
        if ret is None:
            instances = models.Target.all()
            if instances.count() == 0:
                instances = self._populate()
            ret = [instance.to_dict() for instance in instances]
            memcache.add(key=self.TARGETS_KEY, time=self.CACHE_LIFE, value=ret)

        return ret

    def _populate(self):
        """
        This will not be needed once we are properly loading
        this data into the datastore.
        """
        models.Target(ic=0, messier=13, ngc=6205, name='Hercules Cluster', type=0).put()
        models.Target(ic=0, messier=57, ngc=6720, name='Ring Nebula', type=0).put()
        models.Target(ic=0, messier=17, ngc=6618, name='Swan Nebula', type=0).put()

        instances = models.Target.all()
        return instances
