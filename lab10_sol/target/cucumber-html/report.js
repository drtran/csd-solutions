$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/getting_errors_with_invalid_payment_info.feature");
formatter.feature({
  "id": "getting-errors-when-entering-invalid-payment-info",
  "description": "\r\nAs a site administrator\r\nI want to see errors displayed properly when invalid payment information is entered\r\nSo we can provide better tech support",
  "name": "Getting errors when entering invalid payment info",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 3578684721,
  "status": "passed"
});
formatter.scenario({
  "id": "getting-errors-when-entering-invalid-payment-info;adopting-one-puppy-from-the-website",
  "tags": [
    {
      "name": "@no-payment-info",
      "line": 7
    }
  ],
  "description": "",
  "name": "Adopting one puppy from the website",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the puppy adoption site \"http://localhost:3000\"",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I click the View Details button for \"Brook\"",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "I click the Adopt Me! button",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I click the Complete the Adoption button",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I complete the adoption using no information",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I should see this error message \"5 errors prohibited this order from being saved:\"",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000",
      "offset": 33
    }
  ],
  "location": "AdoptingPuppiesSteps.I_am_on_the_puppy_adoption_site(String)"
});
formatter.result({
  "duration": 4414567005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brook",
      "offset": 37
    }
  ],
  "location": "AdoptingPuppiesSteps.I_click_the_View_Details_button_for(String)"
});
formatter.result({
  "duration": 582988830,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 807450458,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 285059414,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_using_no_information()"
});
formatter.result({
  "duration": 1237580824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 errors prohibited this order from being saved:",
      "offset": 33
    }
  ],
  "location": "AdoptingPuppiesSteps.I_should_see_this_error_message(String)"
});
formatter.result({
  "duration": 119037127,
  "status": "passed"
});
});