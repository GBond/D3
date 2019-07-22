from behave import *

@when(u'I navigate to Home Page')
def step_impl(ctx):
    ctx.resp = ctx.client.get('/')

@then(u'{text} should be displayed')
def step_impl(ctx):
    assert text in ctx.resp
