$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality",
  "description": "As a valid user , I should be able to login to the application.",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I enter \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click Accounts tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I am on Accounts home page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click the new button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Account Name field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click the save button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the Account record",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I quit",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "test-login-functionality;test-using-valid-credentials;;1"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 25,
      "id": "test-login-functionality;test-using-valid-credentials;;2"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 26,
      "id": "test-login-functionality;test-using-valid-credentials;;3"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 27,
      "id": "test-login-functionality;test-using-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I maximize my window",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Pa55word\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click Accounts tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I am on Accounts home page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click the new button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Account Name field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click the save button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the Account record",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I maximize my window",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Pa55word\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click Accounts tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I am on Accounts home page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click the new button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Account Name field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click the save button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the Account record",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I maximize my window",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Pa55word\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click Accounts tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I am on Accounts home page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click the new button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Account Name field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click the save button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the Account record",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});