@smoke
Feature: VyTrack Login

  @Regression
  Scenario Outline: Home page default login for all users
    Given User is on vyTrack landing page
    When User log in to vyTrack account with valid <username> and <password>

    Examples:
      |username|password|
      |user156 |UserUser123|
      |user157 |UserUser123|
      |user158 |UserUser123|
      |storemanager89|UserUser123|
      |storemanager91|UserUser123|
      |salesmanager255|UserUser123|
      |salesmanager256|UserUser123|

  @smoke
  Scenario: Sales manager logs in with valid credential and see  all the vehicle info.
    Given User is on vyTrack landing page
    When User log in with "storemanager89" and "UserUser123"
    Then User should be able to find Vehicle under Fleet module
    And See All cars
  @smoke
  Scenario: Sales manager sould be able to create vehicle.
    Given User is on Vehicles under Fleet module
    When when user click to create car button and add following details
      |abc|123456|Dallas|
    Then Click to Save and Close button
    And Sales manager should see it in All Cars list