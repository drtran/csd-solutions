$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("getting_several_customers_info.feature");
formatter.feature({
  "id": "getting-information-for-several-customers",
  "description": "As a partner application,\r\nI want to get information of a customer by a customer ID\r\nSo that, I can send promotion information to that customer.",
  "name": "Getting Information for several customers",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 404312,
  "status": "passed"
});
formatter.scenario({
  "id": "getting-information-for-several-customers;getting-a-customer-record-by-a-given-customer-id;;2",
  "tags": [
    {
      "name": "@several-customers",
      "line": 6
    }
  ],
  "description": "",
  "name": "Getting a customer record by a given customer ID",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "that a customer exists with \"EASTC\", \"Eastern Connection\", \"Ann Devon\", \"Sales Agent\", and \"(171) 555-0297\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ]
});
formatter.step({
  "name": "I call MongoRS service with a given \"EASTC\"",
  "keyword": "When ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I should receive a customer record with \"EASTC\", \"Eastern Connection\", \"Ann Devon\", \"Sales Agent\", and \"(171) 555-0297\"",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "EASTC",
      "offset": 29
    },
    {
      "val": "Eastern Connection",
      "offset": 38
    },
    {
      "val": "Ann Devon",
      "offset": 60
    },
    {
      "val": "Sales Agent",
      "offset": 73
    },
    {
      "val": "(171) 555-0297",
      "offset": 92
    }
  ],
  "location": "GettingCustomerInfoSteps.that_a_customer_exists_with_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 2273247578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EASTC",
      "offset": 37
    }
  ],
  "location": "GettingCustomerInfoSteps.I_call_MongoRS_service_with_a_given(String)"
});
formatter.result({
  "duration": 234326919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EASTC",
      "offset": 41
    },
    {
      "val": "Eastern Connection",
      "offset": 50
    },
    {
      "val": "Ann Devon",
      "offset": 72
    },
    {
      "val": "Sales Agent",
      "offset": 85
    },
    {
      "val": "(171) 555-0297",
      "offset": 104
    }
  ],
  "location": "GettingCustomerInfoSteps.I_should_receive_a_customer_record_with_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 647777,
  "status": "passed"
});
formatter.after({
  "duration": 50845,
  "status": "passed"
});
formatter.before({
  "duration": 191155,
  "status": "passed"
});
formatter.scenario({
  "id": "getting-information-for-several-customers;getting-a-customer-record-by-a-given-customer-id;;3",
  "tags": [
    {
      "name": "@several-customers",
      "line": 6
    }
  ],
  "description": "",
  "name": "Getting a customer record by a given customer ID",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "that a customer exists with \"DUMON\", \"Du monde entier\", \"Janine Labrune\", \"Owner\", and \"France\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ]
});
formatter.step({
  "name": "I call MongoRS service with a given \"DUMON\"",
  "keyword": "When ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I should receive a customer record with \"DUMON\", \"Du monde entier\", \"Janine Labrune\", \"Owner\", and \"France\"",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "DUMON",
      "offset": 29
    },
    {
      "val": "Du monde entier",
      "offset": 38
    },
    {
      "val": "Janine Labrune",
      "offset": 57
    },
    {
      "val": "Owner",
      "offset": 75
    },
    {
      "val": "France",
      "offset": 88
    }
  ],
  "location": "GettingCustomerInfoSteps.that_a_customer_exists_with_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 206136115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DUMON",
      "offset": 37
    }
  ],
  "location": "GettingCustomerInfoSteps.I_call_MongoRS_service_with_a_given(String)"
});
formatter.result({
  "duration": 188680335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DUMON",
      "offset": 41
    },
    {
      "val": "Du monde entier",
      "offset": 50
    },
    {
      "val": "Janine Labrune",
      "offset": 69
    },
    {
      "val": "Owner",
      "offset": 87
    },
    {
      "val": "France",
      "offset": 100
    }
  ],
  "location": "GettingCustomerInfoSteps.I_should_receive_a_customer_record_with_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 392578,
  "status": "passed"
});
formatter.after({
  "duration": 31289,
  "status": "passed"
});
});