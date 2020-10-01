@BaseTest
Feature: Division check scenarios

  Scenario Outline: Division check with different numbers
    When user enter "<numerator>" and user enter "<denominator>"
    Then user press divide button
    And user validate the expect "<result>" matches output on the UI
    And user press clear button
    Examples:
      | numerator | denominator | result              |
      | 23        | 23          | 1.0                 |
      | 2         | 1           | 2.0                 |
      | -1        | 2           | -0.5                |
      | -1        | -2          | 0.5                 |
      | 1111      | 222222222   | 4.9995000049995E-6  |
      | 1.6       | 2           | 0.8                 |
      | 1         | 2.2         | 0.45454545454545453 |
      | 0         | 2           | 0.0                 |
      | 0         | -2          | -0.0                |
      | 0         | 0           | NaN                 |
      | 2         | 0           | Infinity            |
      | -1        | 0           | -Infinity           |
      | 1         | -0          | Infinity            |


  Scenario Outline: Checking Visibility and Availibility of interaction of all button
    Given user sees "<button>"
    And   user avaliable to interact with button "<button>"
    Examples:
      | button       |
      | numerator    |
      | devisor      |
      | result       |
      | buttonDivide |
      | buttonClear  |




