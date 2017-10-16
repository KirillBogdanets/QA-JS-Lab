@important
Feature: Searching train with routing form on main page
  As user i want to be able to have valid output after entering valid value in finding routes form on home page

  #@role(logged)
  Scenario: Validation details
    Given I am on Home page
    Then I enter valid departure place "Минск" and valid arrival place "Молодечно" into the fields
    Then I push the button named "Куда"
    Then I wait page loaded
    Then Page url should begin with "Расписание движения поездов"
