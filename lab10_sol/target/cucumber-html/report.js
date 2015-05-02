$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buying_one_puppy.feature");
formatter.feature({
  "id": "adopting-a-puppy",
  "description": "\r\nAs a puppy lover\r\nI want to adopt puppies\r\nSo they can chew my furniture",
  "name": "Adopting a puppy",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 3304082642,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-a-puppy;adopting-one-puppy-from-the-website",
  "tags": [
    {
      "name": "@simple-one-puppy",
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
  "name": "I complete the adoption using this information \"Mr. Cheezy\", \"123 Main Street\", \"cheezy@mail.com\", \"Check\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
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
  "location": "BuyingOnePuppySteps.I_am_on_the_puppy_adoption_site(String)"
});
formatter.result({
  "duration": 3844760577,
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
  "duration": 601715232,
  "status": "passed"
});
formatter.match({
  "location": "BuyingOnePuppySteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 754248096,
  "status": "passed"
});
formatter.match({
  "location": "BuyingOnePuppySteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 349251511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr. Cheezy",
      "offset": 48
    },
    {
      "val": "123 Main Street",
      "offset": 62
    },
    {
      "val": "cheezy@mail.com",
      "offset": 81
    },
    {
      "val": "Check",
      "offset": 100
    }
  ],
  "location": "BuyingOnePuppySteps.I_complete_the_adoption_using_this_information_(String,String,String,String)"
});
formatter.result({
  "duration": 1832227210,
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
  "duration": 106914635,
  "status": "passed"
});
});