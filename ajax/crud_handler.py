from google.appengine.ext import webapp

from django.utils import simplejson

import decorators
import models

class CRUDHandler(webapp.RequestHandler):
    def initialize(self, request, response):
        self.user = models.UserProfile.get_current_profile()
        if request.headers['Content-Type'] == 'application/json':
            self.json_data = simplejson.loads(request.body)
        super(CRUDHandler, self).initialize(request, response)

    def _get_model_instance(self, key):
        if not (hasattr(self, '_model_instance') and isinstance(self._model_instance, self.model)):
            self._model_instance = self.model.get(key)
        return self._model_instance

    @decorators.json
    def get(self):
        instances = self.model.all().filter('owner =', self.user)

        ret = [instance.to_dict() for instance in instances]

        return ret

    @decorators.json
    def post(self):
        data = self.form(data=self.json_data)

        if data.is_valid():
            instance = data.save(commit=False)
            if hasattr(instance, 'owner'):
                instance.owner = self.user
            instance.save()
            return [instance.to_dict()]
        else:
            return self.return_not_valid()

    @decorators.json
    def put(self):
        key = self.json_data['key']

        instance = self._get_model_instance(key)
        if instance is None:
            return self.return_not_found()
        if hasattr(instance, 'owner') and instance.owner != None and instance.owner.key() != self.user.key():
            return self.return_not_valid()

        data = self.form(self.json_data, instance=instance)

        if data.is_valid():
            instance = data.save()
            return [instance.to_dict()]
        else:
            return self.return_not_valid()

    def delete(self):
        key = self.json_data['key']

        instance = self._get_model_instance(key)
        if instance is None:
            return self.return_not_found()
        if instance.owner.key() != self.user.key():
            return self.return_not_valid()

        instance.delete()

    def return_not_valid(self):
        self.error(400)
        return 'Data not valid'
        
    def return_not_found(self):
        self.error(404)
        return 'instance not found'

    def return_forbidden(self):
        self.error(403)
        return 'Forbidden'
