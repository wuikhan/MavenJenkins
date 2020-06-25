Feature: Test login functionality
  As a valid user , I should be able to login to the application.

  Scenario: As a valid user I should be able to login to the application
    Given I open the browser
    When I go to the application
    Then I should see the logo
    And I enter valid username
    And I enter valid password
    When I click the login button

  Scenario: As a valid user I should be able to login to the application
    Given I open the browser
    When I go to the application
    #Then I should see the logo
    And I enter valid username
    And I enter valid password
    When I click the login button
