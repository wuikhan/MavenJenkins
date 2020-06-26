Feature: Test login functionality
  As a valid user , I should be able to login to the application.

  Background: 
    Given I Open Chrome Browser
    When I go to the Salesforce application
    And I maximize my window
    Then I should see the Salesforce logo

  Scenario Outline: Test Using Valid Credentials
    And I enter "<username>" username
    And I enter "<password>" password
    When I click the login button
    Then I should see the logout link
    When I click Accounts tab
    Then I am on Accounts home page
    And I click the new button
    And I enter Account Name field
    When I click the save button
    Then I should see the Account record
    And I quit

    Examples: 
      | username                | password |
      | batch03@codegator.us.qa | Pa55word |
   
