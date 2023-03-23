Feature: Login Feature


Scenario: Launch Application

    Given I launch V2 Application
        And I switch to webview
    Then I should see Sign Up screen is displayed

Scenario: Click on Log In link on Sign Up Page

    Given I am on Sign Up Screen
        And I switch to webview
    When I click on Log in link
    Then I should see Sign In Screen

Scenario Outline: Mobile number validation <Description>

    Given I am on Sign In Screen
        And I switch to webview
    When I should see Mobile field
    When I select Singapore Country_Code
    Then I input mobile number as "<Mobile_No>" 
        And I should get message as "<Message>"   
    Examples:
    |Description         | Mobile_No   | Message |
    |Singapore: 8 digits | 85552241    | Valid   |
    |Singapore: >8 digits| 855522409   | Invalid |
    |Singapore: <8 digits| 8555244     | Invalid |
    |Singapore: >11digits| 855524409102| Invalid |

Scenario Outline: Mobile number validation <Description>
    Given I am on Sign In Screen
        And I switch to webview
    When I select Malaysia Country_Code
    Then I input mobile number as "<Mobile_No>" 
        And I should get message as "<Message>"
    Examples:
    |Description         | Mobile_No   | Message |
    |Malaysia : <8 digit | 8555224     | Invalid |
    |Malaysia : 8 digits | 85552241    | Valid   |
    |Malaysia : 9 digits | 855522419   | Valid   |
    |Malaysia : 10 digits| 8555224190  | Valid   |
    |Malaysia : 11 digits| 85552241901 | Valid   |
    |Malaysia : >11digits| 855522419010| Invalid |

Scenario Outline: Mobile number validation <Description> : <Message>
    Given I am on Sign In Screen
        And I switch to webview
    When I select Philippines Country_Code
    Then I input mobile number as "<Mobile_No>" 
        And I should get message as "<Message>"
    Examples:
    |Description              | Mobile_No  | Message               |
    |Philippines: 10 digits   | 855522419  | Valid                 | 
    |Philippines: Start with 0| 0          | Must not start with 0 |
        

# If user types more than the digit limit, do not allow addition of digits
# If user types less than the character limit, Continue button is disabled 