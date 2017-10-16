@important
Feature: Booking excursion New Year tour across Republic of Belarus
As user i want to book excursion tour across Republic of Belarus during New Year's holidays

  Scenario: Booking excursion
    Given I am on Main page 
    Then I click on button with name "Весь сайт" 
    And I push on button named "ТУРИЗМ И ОТДЫХ"
    And I follow the link with name "Главая страница раздела 'ТУРИЗМ И ОТДЫХ'"
    Then I wait until page with offers is loaded
    Then I follow the link "Экскурсии по Беларуси"
    Then I wait until page with Belarusian excursions is loaded
    Then I follow the link named "Новогодний экспресс: Москва - Минск - Брест - Москва"
    Then I wait until page with Belarusian excursion named "Новогодний экспресс: Москва - Минск - Брест - Москва" is loaded
    And I check the correctness of the derived excursion name "Новогодний экспресс: Москва - Минск - Брест - Москва"
    And I check the correcness of derived excursion duration
    