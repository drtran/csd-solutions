$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/adopting_several_puppies_with_outline.feature");
formatter.feature({
  "id": "adopting-several-puppies",
  "description": "\r\nAs a puppy lover\r\nI want to adopt puppies\r\nSo they can chew my furniture",
  "name": "Adopting several puppies",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 3421627679,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-several-puppies;adopting-two-puppies-from-the-website;;2",
  "tags": [
    {
      "name": "@simple-several-puppies-outline",
      "line": 7
    }
  ],
  "description": "",
  "name": "Adopting two puppies from the website",
  "keyword": "Scenario Outline",
  "line": 21,
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
  "line": 10,
  "matchedColumns": [
    0
  ]
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
  "name": "I complete the adoption with \"Check\":",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    1
  ],
  "rows": [
    {
      "cells": [
        "orderName",
        "orderAddress",
        "orderEmail",
        "orderPaymentType"
      ],
      "line": 14
    },
    {
      "cells": [
        "Cheezy",
        "123 Main Street",
        "cheezy@example.com",
        "Check"
      ],
      "line": 15
    },
    {
      "cells": [
        "Sleezy",
        "123 Main Street",
        "sleezy@example.com",
        "Credit card"
      ],
      "line": 16
    },
    {
      "cells": [
        "Crazy",
        "123 Main Street",
        "crazy@example.com",
        "Purchase order"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 18
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
  "duration": 3118911552,
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
  "duration": 601279143,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 586261941,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 343289999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check",
      "offset": 30
    }
  ],
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_with_(String,PaymentInfo\u003e)"
});
formatter.result({
  "duration": 1695876571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for adopting a puppy!",
      "offset": 14
    }
  ],
  "location": "AdoptingPuppiesSteps.I_should_see(String)"
});
formatter.result({
  "duration": 106210636,
  "status": "passed"
});
formatter.before({
  "duration": 198978,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-several-puppies;adopting-two-puppies-from-the-website;;3",
  "tags": [
    {
      "name": "@simple-several-puppies-outline",
      "line": 7
    }
  ],
  "description": "",
  "name": "Adopting two puppies from the website",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the puppy adoption site \"http://localhost:3000\"",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I click the View Details button for \"Hanna\"",
  "keyword": "When ",
  "line": 10,
  "matchedColumns": [
    0
  ]
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
  "name": "I complete the adoption with \"Credit card\":",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    1
  ],
  "rows": [
    {
      "cells": [
        "orderName",
        "orderAddress",
        "orderEmail",
        "orderPaymentType"
      ],
      "line": 14
    },
    {
      "cells": [
        "Cheezy",
        "123 Main Street",
        "cheezy@example.com",
        "Check"
      ],
      "line": 15
    },
    {
      "cells": [
        "Sleezy",
        "123 Main Street",
        "sleezy@example.com",
        "Credit card"
      ],
      "line": 16
    },
    {
      "cells": [
        "Crazy",
        "123 Main Street",
        "crazy@example.com",
        "Purchase order"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 18
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
  "duration": 287555192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hanna",
      "offset": 37
    }
  ],
  "location": "AdoptingPuppiesSteps.I_click_the_View_Details_button_for(String)"
});
formatter.result({
  "duration": 538236912,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 546577847,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 355128445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit card",
      "offset": 30
    }
  ],
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_with_(String,PaymentInfo\u003e)"
});
formatter.result({
  "duration": 1532369128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for adopting a puppy!",
      "offset": 14
    }
  ],
  "location": "AdoptingPuppiesSteps.I_should_see(String)"
});
formatter.result({
  "duration": 109022725,
  "status": "passed"
});
formatter.before({
  "duration": 195066,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-several-puppies;adopting-two-puppies-from-the-website;;4",
  "tags": [
    {
      "name": "@simple-several-puppies-outline",
      "line": 7
    }
  ],
  "description": "",
  "name": "Adopting two puppies from the website",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the puppy adoption site \"http://localhost:3000\"",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I click the View Details button for \"Ruby Sue\"",
  "keyword": "When ",
  "line": 10,
  "matchedColumns": [
    0
  ]
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
  "name": "I complete the adoption with \"Purchase order\":",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    1
  ],
  "rows": [
    {
      "cells": [
        "orderName",
        "orderAddress",
        "orderEmail",
        "orderPaymentType"
      ],
      "line": 14
    },
    {
      "cells": [
        "Cheezy",
        "123 Main Street",
        "cheezy@example.com",
        "Check"
      ],
      "line": 15
    },
    {
      "cells": [
        "Sleezy",
        "123 Main Street",
        "sleezy@example.com",
        "Credit card"
      ],
      "line": 16
    },
    {
      "cells": [
        "Crazy",
        "123 Main Street",
        "crazy@example.com",
        "Purchase order"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 18
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
  "duration": 293382259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ruby Sue",
      "offset": 37
    }
  ],
  "location": "AdoptingPuppiesSteps.I_click_the_View_Details_button_for(String)"
});
formatter.result({
  "duration": 672182218,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 597043410,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 294258349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Purchase order",
      "offset": 30
    }
  ],
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_with_(String,PaymentInfo\u003e)"
});
formatter.result({
  "duration": 1575406511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for adopting a puppy!",
      "offset": 14
    }
  ],
  "location": "AdoptingPuppiesSteps.I_should_see(String)"
});
formatter.result({
  "duration": 85509122,
  "status": "passed"
});
});