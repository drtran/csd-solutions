$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/all_features_with_background.feature");
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
  "duration": 8661625011,
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
  "duration": 3086550526,
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
  "duration": 618717323,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 642992126,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 340345421,
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
  "duration": 1719991018,
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
  "duration": 112708459,
  "status": "passed"
});
formatter.before({
  "duration": 193600,
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
  "duration": 291231148,
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
  "duration": 487868640,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 572228873,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_on_Adopt_Another_Puppy()"
});
formatter.result({
  "duration": 326305997,
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
  "duration": 473503615,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 547422159,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 318443685,
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
  "duration": 1663938922,
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
  "duration": 99424857,
  "status": "passed"
});
formatter.before({
  "duration": 183822,
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
  "duration": 230167941,
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
  "duration": 447156901,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 630158303,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 288810170,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_complete_the_adoption_with(PaymentInfo\u003e)"
});
formatter.result({
  "duration": 1625070295,
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
  "duration": 96762368,
  "status": "passed"
});
formatter.before({
  "duration": 185289,
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
  "duration": 294970171,
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
  "duration": 4501423505,
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
  "duration": 1486195033,
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
  "duration": 99983657,
  "status": "passed"
});
formatter.before({
  "duration": 171600,
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
  "duration": 290115503,
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
  "duration": 425670232,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 872142199,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 350936222,
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
  "duration": 1498962368,
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
  "duration": 103370191,
  "status": "passed"
});
formatter.before({
  "duration": 173067,
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
  "duration": 260982122,
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
  "duration": 612607189,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 836152151,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 280181769,
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
  "duration": 1512201481,
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
  "duration": 83442588,
  "status": "passed"
});
formatter.before({
  "duration": 183822,
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
  "duration": 226693406,
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
  "duration": 590617452,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Adopt_Me_button()"
});
formatter.result({
  "duration": 901380203,
  "status": "passed"
});
formatter.match({
  "location": "AdoptingPuppiesSteps.I_click_the_Complete_the_Adoption_button()"
});
formatter.result({
  "duration": 301253372,
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
  "duration": 1422892225,
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
  "duration": 82009655,
  "status": "passed"
});
});