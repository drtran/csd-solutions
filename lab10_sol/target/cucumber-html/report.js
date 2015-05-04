$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/adopting_one_puppy.feature");
formatter.feature({
  "id": "adopting-a-puppy",
  "description": "\r\nAs a puppy lover\r\nI want to adopt a puppy\r\nSo they can chew my furniture",
  "name": "Adopting a puppy",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 2688514741,
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
  "location": "AdoptingPuppiesSteps.I_am_on_the_puppy_adoption_site(String)"
});
formatter.result({
  "duration": 4457645944,
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
  "duration": 621771901,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 723980492,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 375628047,
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
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_using_this_information_(String,String,String,String)"
});
formatter.result({
  "duration": 2368659634,
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
  "duration": 121449304,
  "status": "passed"
});
formatter.before({
  "duration": 202889,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-a-puppy;adopting-one-puppy-from-the-website",
  "tags": [
    {
      "name": "@simple-on-puppy-with-table",
      "line": 16
    }
  ],
  "description": "",
  "name": "Adopting one puppy from the website",
  "keyword": "Scenario",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the puppy adoption site \"http://localhost:3000\"",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "I click the View Details button for \"Brook\"",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "I click the Adopt Me! button",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I click the Complete the Adoption button",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "I complete the adoption with:",
  "keyword": "And ",
  "line": 22,
  "rows": [
    {
      "cells": [
        "orderName",
        "orderAddress",
        "orderEmail",
        "orderPaymentType"
      ],
      "line": 23
    },
    {
      "cells": [
        "Cheezy",
        "123 Main Street",
        "cheezy@example.com",
        "Check"
      ],
      "line": 24
    }
  ]
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 25
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
  "duration": 301197638,
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
  "duration": 472715038,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 704418089,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 238815897,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_with(PaymentInfo\u003e)"
});
formatter.result({
  "duration": 1942375847,
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
  "duration": 110719170,
  "status": "passed"
});
formatter.uri("features/adopting_several_puppies.feature");
formatter.feature({
  "id": "adopting-several-puppies",
  "description": "\r\nAs a puppy lover\r\nI want to adopt puppies\r\nSo they can chew my furniture",
  "name": "Adopting several puppies",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 263511,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-several-puppies;adopting-two-puppies-from-the-website",
  "tags": [
    {
      "name": "@simple-several-puppies",
      "line": 7
    }
  ],
  "description": "",
  "name": "Adopting two puppies from the website",
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
  "name": "I complete adopting these puppies:",
  "keyword": "When ",
  "line": 10,
  "rows": [
    {
      "cells": [
        "Brook"
      ],
      "line": 11
    },
    {
      "cells": [
        "Hanna"
      ],
      "line": 12
    },
    {
      "cells": [
        "Ruby Sue"
      ],
      "line": 13
    }
  ]
});
formatter.step({
  "name": "I complete the adoption using this information \"Mr. Cheezy\", \"123 Main Street\", \"cheezy@mail.com\", \"Check\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 15
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
  "duration": 380164448,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_complete_adopting_these_puppies(String\u003e)"
});
formatter.result({
  "duration": 4423686739,
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
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_using_this_information_(String,String,String,String)"
});
formatter.result({
  "duration": 1612179760,
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
  "duration": 94907523,
  "status": "passed"
});
formatter.uri("features/adopting_several_puppies_with_outline.feature");
formatter.feature({
  "id": "adopting-several-puppies",
  "description": "\r\nAs a puppy lover\r\nI want to adopt puppies\r\nSo they can chew my furniture",
  "name": "Adopting several puppies",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 242978,
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
  "duration": 442784768,
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
  "duration": 434177388,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 632284480,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 344296133,
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
  "duration": 1882271839,
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
  "duration": 108190636,
  "status": "passed"
});
formatter.before({
  "duration": 190178,
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
  "duration": 310297818,
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
  "duration": 537609180,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 693620977,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 316169373,
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
  "duration": 2021484435,
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
  "duration": 81942188,
  "status": "passed"
});
formatter.before({
  "duration": 176978,
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
  "duration": 292299370,
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
  "duration": 587996030,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 695077377,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 342740977,
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
  "duration": 2022383013,
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
  "duration": 77476188,
  "status": "passed"
});
formatter.uri("features/adopting_two_puppies.feature");
formatter.feature({
  "id": "adopting-two-puppies",
  "description": "\r\nAs a puppy lover\r\nI want to adopt puppies\r\nSo they can chew my furniture",
  "name": "Adopting two puppies",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 184311,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-two-puppies;adopting-two-puppies-from-the-website",
  "tags": [
    {
      "name": "@simple-two-puppies",
      "line": 7
    }
  ],
  "description": "",
  "name": "Adopting two puppies from the website",
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
  "name": "I click on Adopt Another Puppy",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I click the View Details button for \"Hanna\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I click the Adopt Me! button",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I click the Complete the Adoption button",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I complete the adoption using this information \"Mr. Cheezy\", \"123 Main Street\", \"cheezy@mail.com\", \"Check\"",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 17
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
  "duration": 286228836,
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
  "duration": 413431874,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 888556646,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_on_Adopt_Another_Puppy()"
});
formatter.result({
  "duration": 319983196,
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
  "duration": 368802180,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 867406822,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 331592353,
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
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_using_this_information_(String,String,String,String)"
});
formatter.result({
  "duration": 1636710742,
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
  "duration": 81624899,
  "status": "passed"
});
formatter.uri("features/all_features_with_background.feature");
formatter.feature({
  "id": "adopting-a-puppy",
  "tags": [
    {
      "name": "@run-all",
      "line": 1
    }
  ],
  "description": "\r\nAs a puppy lover\r\nI want to adopt a puppy\r\nSo they can chew my furniture",
  "name": "Adopting a puppy",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 177466,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on the puppy adoption site \"http://localhost:3000\"",
  "keyword": "Given ",
  "line": 9
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
  "duration": 333946842,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-a-puppy;adopting-one-puppy-from-the-website",
  "tags": [
    {
      "name": "@simple-one-puppy",
      "line": 11
    }
  ],
  "description": "",
  "name": "Adopting one puppy from the website",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I click the View Details button for \"Brook\"",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "I click the Adopt Me! button",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I click the Complete the Adoption button",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I complete the adoption using this information \"Mr. Cheezy\", \"123 Main Street\", \"cheezy@mail.com\", \"Check\"",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 17
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
  "duration": 459282813,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 945818254,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 326868219,
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
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_using_this_information_(String,String,String,String)"
});
formatter.result({
  "duration": 1745389288,
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
  "duration": 79372099,
  "status": "passed"
});
formatter.before({
  "duration": 223422,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on the puppy adoption site \"http://localhost:3000\"",
  "keyword": "Given ",
  "line": 9
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
  "duration": 282222392,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-a-puppy;adopting-two-puppies-from-the-website",
  "tags": [
    {
      "name": "@simple-two-puppies",
      "line": 19
    }
  ],
  "description": "",
  "name": "Adopting two puppies from the website",
  "keyword": "Scenario",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I click the View Details button for \"Brook\"",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "I click the Adopt Me! button",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "I click on Adopt Another Puppy",
  "keyword": "And ",
  "line": 23
});
formatter.step({
  "name": "I click the View Details button for \"Hanna\"",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "I click the Adopt Me! button",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "I click the Complete the Adoption button",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "I complete the adoption using this information \"Mr. Cheezy\", \"123 Main Street\", \"cheezy@mail.com\", \"Check\"",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 28
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
  "duration": 468446060,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 960637945,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_on_Adopt_Another_Puppy()"
});
formatter.result({
  "duration": 350552933,
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
  "duration": 514340021,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 604040877,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 306270350,
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
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_using_this_information_(String,String,String,String)"
});
formatter.result({
  "duration": 1970967051,
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
  "duration": 98982413,
  "status": "passed"
});
formatter.before({
  "duration": 175511,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on the puppy adoption site \"http://localhost:3000\"",
  "keyword": "Given ",
  "line": 9
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
  "duration": 320372352,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-a-puppy;adopting-one-puppy-from-the-website",
  "tags": [
    {
      "name": "@simple-on-puppy-with-table",
      "line": 31
    }
  ],
  "description": "",
  "name": "Adopting one puppy from the website",
  "keyword": "Scenario",
  "line": 32,
  "type": "scenario"
});
formatter.step({
  "name": "I click the View Details button for \"Brook\"",
  "keyword": "When ",
  "line": 33
});
formatter.step({
  "name": "I click the Adopt Me! button",
  "keyword": "And ",
  "line": 34
});
formatter.step({
  "name": "I click the Complete the Adoption button",
  "keyword": "And ",
  "line": 35
});
formatter.step({
  "name": "I complete the adoption with:",
  "keyword": "And ",
  "line": 36,
  "rows": [
    {
      "cells": [
        "orderName",
        "orderAddress",
        "orderEmail",
        "orderPaymentType"
      ],
      "line": 37
    },
    {
      "cells": [
        "Cheezy",
        "123 Main Street",
        "cheezy@example.com",
        "Check"
      ],
      "line": 38
    }
  ]
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 39
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
  "duration": 439235923,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 792467967,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 301664039,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_with(PaymentInfo\u003e)"
});
formatter.result({
  "duration": 1905040864,
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
  "duration": 103371169,
  "status": "passed"
});
formatter.before({
  "duration": 175511,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on the puppy adoption site \"http://localhost:3000\"",
  "keyword": "Given ",
  "line": 9
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
  "duration": 296495505,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-a-puppy;adopting-two-puppies-from-the-website",
  "tags": [
    {
      "name": "@simple-several-puppies",
      "line": 41
    }
  ],
  "description": "",
  "name": "Adopting two puppies from the website",
  "keyword": "Scenario",
  "line": 42,
  "type": "scenario"
});
formatter.step({
  "name": "I complete adopting these puppies:",
  "keyword": "When ",
  "line": 43,
  "rows": [
    {
      "cells": [
        "Brook"
      ],
      "line": 44
    },
    {
      "cells": [
        "Hanna"
      ],
      "line": 45
    },
    {
      "cells": [
        "Ruby Sue"
      ],
      "line": 46
    }
  ]
});
formatter.step({
  "name": "I complete the adoption using this information \"Mr. Cheezy\", \"123 Main Street\", \"cheezy@mail.com\", \"Check\"",
  "keyword": "And ",
  "line": 47
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 48
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_complete_adopting_these_puppies(String\u003e)"
});
formatter.result({
  "duration": 4642634678,
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
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_using_this_information_(String,String,String,String)"
});
formatter.result({
  "duration": 2011380567,
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
  "duration": 98762413,
  "status": "passed"
});
formatter.before({
  "duration": 205333,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on the puppy adoption site \"http://localhost:3000\"",
  "keyword": "Given ",
  "line": 9
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
  "duration": 323181997,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-a-puppy;adopting-two-puppies-from-the-website;;2",
  "tags": [
    {
      "name": "@simple-several-puppies-outline",
      "line": 50
    },
    {
      "name": "@run-all",
      "line": 1
    }
  ],
  "description": "",
  "name": "Adopting two puppies from the website",
  "keyword": "Scenario Outline",
  "line": 63,
  "type": "scenario"
});
formatter.step({
  "name": "I click the View Details button for \"Brook\"",
  "keyword": "When ",
  "line": 52,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click the Adopt Me! button",
  "keyword": "And ",
  "line": 53
});
formatter.step({
  "name": "I click the Complete the Adoption button",
  "keyword": "And ",
  "line": 54
});
formatter.step({
  "name": "I complete the adoption with \"Check\":",
  "keyword": "And ",
  "line": 55,
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
      "line": 56
    },
    {
      "cells": [
        "Cheezy",
        "123 Main Street",
        "cheezy@example.com",
        "Check"
      ],
      "line": 57
    },
    {
      "cells": [
        "Sleezy",
        "123 Main Street",
        "sleezy@example.com",
        "Credit card"
      ],
      "line": 58
    },
    {
      "cells": [
        "Crazy",
        "123 Main Street",
        "crazy@example.com",
        "Purchase order"
      ],
      "line": 59
    }
  ]
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 60
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
  "duration": 434885299,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 779399966,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 320477463,
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
  "duration": 1885691129,
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
  "duration": 99598413,
  "status": "passed"
});
formatter.before({
  "duration": 172089,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on the puppy adoption site \"http://localhost:3000\"",
  "keyword": "Given ",
  "line": 9
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
  "duration": 316322396,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-a-puppy;adopting-two-puppies-from-the-website;;3",
  "tags": [
    {
      "name": "@simple-several-puppies-outline",
      "line": 50
    },
    {
      "name": "@run-all",
      "line": 1
    }
  ],
  "description": "",
  "name": "Adopting two puppies from the website",
  "keyword": "Scenario Outline",
  "line": 64,
  "type": "scenario"
});
formatter.step({
  "name": "I click the View Details button for \"Hanna\"",
  "keyword": "When ",
  "line": 52,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click the Adopt Me! button",
  "keyword": "And ",
  "line": 53
});
formatter.step({
  "name": "I click the Complete the Adoption button",
  "keyword": "And ",
  "line": 54
});
formatter.step({
  "name": "I complete the adoption with \"Credit card\":",
  "keyword": "And ",
  "line": 55,
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
      "line": 56
    },
    {
      "cells": [
        "Cheezy",
        "123 Main Street",
        "cheezy@example.com",
        "Check"
      ],
      "line": 57
    },
    {
      "cells": [
        "Sleezy",
        "123 Main Street",
        "sleezy@example.com",
        "Credit card"
      ],
      "line": 58
    },
    {
      "cells": [
        "Crazy",
        "123 Main Street",
        "crazy@example.com",
        "Purchase order"
      ],
      "line": 59
    }
  ]
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 60
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
  "duration": 475213261,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 771744454,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 339777821,
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
  "duration": 1910695353,
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
  "duration": 81221077,
  "status": "passed"
});
formatter.before({
  "duration": 180889,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on the puppy adoption site \"http://localhost:3000\"",
  "keyword": "Given ",
  "line": 9
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
  "duration": 275116390,
  "status": "passed"
});
formatter.scenario({
  "id": "adopting-a-puppy;adopting-two-puppies-from-the-website;;4",
  "tags": [
    {
      "name": "@simple-several-puppies-outline",
      "line": 50
    },
    {
      "name": "@run-all",
      "line": 1
    }
  ],
  "description": "",
  "name": "Adopting two puppies from the website",
  "keyword": "Scenario Outline",
  "line": 65,
  "type": "scenario"
});
formatter.step({
  "name": "I click the View Details button for \"Ruby Sue\"",
  "keyword": "When ",
  "line": 52,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click the Adopt Me! button",
  "keyword": "And ",
  "line": 53
});
formatter.step({
  "name": "I click the Complete the Adoption button",
  "keyword": "And ",
  "line": 54
});
formatter.step({
  "name": "I complete the adoption with \"Purchase order\":",
  "keyword": "And ",
  "line": 55,
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
      "line": 56
    },
    {
      "cells": [
        "Cheezy",
        "123 Main Street",
        "cheezy@example.com",
        "Check"
      ],
      "line": 57
    },
    {
      "cells": [
        "Sleezy",
        "123 Main Street",
        "sleezy@example.com",
        "Credit card"
      ],
      "line": 58
    },
    {
      "cells": [
        "Crazy",
        "123 Main Street",
        "crazy@example.com",
        "Purchase order"
      ],
      "line": 59
    }
  ]
});
formatter.step({
  "name": "I should see \"Thank you for adopting a puppy!\"",
  "keyword": "Then ",
  "line": 60
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
  "duration": 618193723,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 796434323,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 266396567,
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
  "duration": 2058098306,
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
  "duration": 88783212,
  "status": "passed"
});
formatter.uri("features/change_mind_after_adopting.feature");
formatter.feature({
  "id": "change-mind-after-adopting-a-puppy",
  "description": "\r\nAs a puppy lover\r\nI want to change my mind after adopting a puppy\r\nSo I can choose another puppy.",
  "name": "Change mind after adopting a puppy",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 187244,
  "status": "passed"
});
formatter.scenario({
  "id": "change-mind-after-adopting-a-puppy;changing-mind-after-adopting-a-puppy-before-pay",
  "tags": [
    {
      "name": "@change-your-mind",
      "line": 7
    }
  ],
  "description": "",
  "name": "Changing mind after adopting a puppy before pay",
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
  "name": "I click the Change your mind button and accept OK",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I should be back on the home page",
  "keyword": "Then ",
  "line": 13
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
  "duration": 279734435,
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
  "duration": 416467875,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 696833955,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Change_your_mind_button_and_accept_OK()"
});
formatter.result({
  "duration": 2283642823,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_should_be_back_on_the_home_page()"
});
formatter.result({
  "duration": 1047505200,
  "status": "passed"
});
formatter.uri("features/getting_errors_with_invalid_payment_info.feature");
formatter.feature({
  "id": "getting-errors-when-entering-invalid-payment-info",
  "description": "\r\nAs a site administrator\r\nI want to see errors displayed properly when invalid payment information is entered\r\nSo we can provide better tech support",
  "name": "Getting errors when entering invalid payment info",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 1436356,
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
  "duration": 333317642,
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
  "duration": 473334460,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 971791456,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 296726749,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_using_no_information()"
});
formatter.result({
  "duration": 1174132327,
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
  "duration": 100228102,
  "status": "passed"
});
});