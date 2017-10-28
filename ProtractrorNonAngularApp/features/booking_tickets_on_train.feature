@important
Feature: Booking tickets on train
As user i want to book train from Minsk to Brest on some date

  Scenario: Booking tickets
    Given I am on booking tickets app Home page 
    Then I click on button named "Распасание движения и стоимость проезда"
    Then I wait until routing page for booking tickets is loaded
    Then I enter departure place "МИНСК", arrival place "БРЕСТ" and departure date "22.11.2017" into necessary fields
    And I click on check box for searching trains only with ability to book tickets by internet
    And I push the button which named "Продолжить"
    Then I wait until proposed results page is loaded
    Then I choose first train
    Then I wait until page for booking tickets is loaded
    Then I push the button with name "Купить билет"
    Then I wait until login page is loaded
    Then I enter prepared user name "kirilmolotil" and user's password "qweasdzxc123" into the fields 
    And I click on the button named "Войти в систему"
    Then I wait until confirming rules page is loaded
    Then I push the button confirming that I agree with rules
    Then I wait until page with user's data is loaded
    Then I check the correctness of the entered route
    Then I check the correctness of the entered departure date 



