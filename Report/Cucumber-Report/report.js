$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality",
  "description": "As a valid user , I should be able to login to the application.",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "As a valid user I should be able to login to the application",
  "description": "",
  "id": "test-login-functionality;as-a-valid-user-i-should-be-able-to-login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to the application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the logo",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter valid username",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.i_open_the_browser()"
});
formatter.result({
  "duration": 95092526,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_the_application()"
});
formatter.result({
  "duration": 48795,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_logo()"
});
formatter.result({
  "duration": 1233603,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_username()"
});
formatter.result({
  "duration": 36056,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_password()"
});
formatter.result({
  "duration": 28428,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 28323,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "As a valid user I should be able to login to the application",
  "description": "",
  "id": "test-login-functionality;as-a-valid-user-i-should-be-able-to-login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I go to the application",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#Then I should see the logo"
    }
  ],
  "line": 16,
  "name": "I enter valid username",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.i_open_the_browser()"
});
formatter.result({
  "duration": 38974,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_the_application()"
});
formatter.result({
  "duration": 34598,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_username()"
});
formatter.result({
  "duration": 47404,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_password()"
});
formatter.result({
  "duration": 32150,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 26619,
  "status": "passed"
});
});