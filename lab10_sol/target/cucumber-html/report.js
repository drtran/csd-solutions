$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buying_one_puppy.feature");
formatter.feature({
  "id": "adopting-a-puppy",
  "description": "\r\nAs a puppy lover\r\nI want to adopt puppies\r\nSo they can chew my furniture",
  "name": "Adopting a puppy",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 9598832463,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-a-puppy;adopting-a-puppy-using-a-table---\u003e-list\u003cpaymentinfo\u003e",
  "tags": [
    {
      "name": "@scenario-1",
      "line": 7
    }
  ],
  "description": "",
  "name": "Adopting a puppy using a table --\u003e List\u003cPaymentInfo\u003e",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the puppy adoption site",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I click the View Details button for \"Brook\"",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "I click the Adopt Me! button",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I click the Complete the Adoption button",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I complete the adoption with:",
  "keyword": "And ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "orderName",
        "orderAddress",
        "orderEmail",
        "orderPaymentType"
      ],
      "line": 15
    },
    {
      "cells": [
        "Cheezy",
        "123 Main Street",
        "cheezy@example.com",
        "Check"
      ],
      "line": 16
    }
  ]
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 17
});
formatter.match({
  "location": "BuyingOnePuppySteps.visitPuppyAdoptionWebSite()"
});
formatter.result({
  "duration": 605277766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brook",
      "offset": 37
    }
  ],
  "location": "BuyingOnePuppySteps.I_click_the_View_Details_button_for(String)"
});
formatter.result({
  "duration": 750174184,
  "status": "passed"
});
formatter.match({
  "location": "BuyingOnePuppySteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 607243099,
  "status": "passed"
});
formatter.match({
  "location": "BuyingOnePuppySteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 376164848,
  "status": "passed"
});
formatter.match({
  "location": "BuyingOnePuppySteps.I_complete_the_adoption_with(PaymentInfo\u003e)"
});
formatter.result({
  "duration": 1705436795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for adopting a puppy!",
      "offset": 14
    }
  ],
  "location": "BuyingOnePuppySteps.I_should_see(String)"
});
formatter.result({
  "duration": 113006192,
  "status": "passed"
});
});