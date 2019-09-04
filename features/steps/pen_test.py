import json
import re
import sys
from zapv2 import ZAPv2
from behave import *

results_file = 'results.json'

@given('we have valid json alert output')
def step_impl(context):
    with open(results_file, 'r') as f:
        try:
            context.alerts = json.load(f)
        except Exception as e:
            sys.stdout.write('Error: Invalid JSON in %s: %s\n' %(results_file, e))
            assert False
    
@when('there is a cross domain source inclusion vulnerability')
def step_impl(context):
    pattern = re.compile(r'cross(?:-|\s+)(?:domain|site)', re.IGNORECASE)
    matches = list()
    for alert in context.alerts:
        if pattern.match(alert['alert']) is not None:
             matches.append(alert)
    context.matches = matches
    assert True

@then('none of these risk levels should be present')
def step_impl(context):
    high_risks = list()
    risk_list = list()
    for row in context.table:
        risk_list.append(row['risk'])
    for alert in context.matches:
         if alert['risk'] in risk_list:
             if not any(n['alert'] == alert['alert'] for n in high_risks):
                 high_risks.append(dict({'alert': alert['alert'],'risk': alert['risk']}))
    if len(high_risks) > 0:
        sys.stderr.write("The following alerts failed:\n")
    for risk in high_risks:
        sys.stderr.write("\t%-5s: %s\n" % (risk['alert'], risk['risk']))
        assert False
    assert True