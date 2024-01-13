@test
Feature: The Daily Mail+ Newapaper Edition 
  
  Scenario Outline: As a user, I should be able to download the Newspaper edition

    Given I am on the Welcome page
    When I click continue button
    And I navigate to The Newspaper view page
    And I click continue button
    And I navigate to The Latest view page
    And I click continue button
    And I navigate to Best of The Mail page
    And I click continue button
    And I navigate to Puzzles page
    And I click continue button
    And I navigate to The Mail Plus homepage
    And I click on the archive icon
    And I navigate to Archive tab on All issues page
    And I click on the download icon on 9 January 2024 edition
    And I navigate to Welcome to Mail Plus Editions page
    And I click on the signin button
    And I navigate to the signin page
    And I sign in using "<emailAddress>" and "<password>"
    Then The 9 January 2024 edition is successfully downloaded

    Examples:
      | emailAddress           | password  |
      | mailqatest94@gmail.com | World123! |


Scenario: As a user, I should be able to retuen to the story page after navigating through image gallery

Given The 9 January 2024 edition is successfully downloaded
When I tap on the front page of the newspaper
And I navigate to the first page of Newspaper
And I click the next article icon to navigate to the third article
And I click on image on the story page to open the image gallery
And I navigate to the last image in the image gallery
And I click the close icon on the last image to close gallery
Then I should return to the story page
