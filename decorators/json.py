from django.utils import simplejson

def json(func):
    def wrapper(self):
        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(simplejson.dumps(func(self)))

    return wrapper
