from webtest import TestApp

from webapp import app

def before_scenario(context, scenario):
    context.client = TestApp(app)


def after_scenario(context, scenario):
    del context.client
