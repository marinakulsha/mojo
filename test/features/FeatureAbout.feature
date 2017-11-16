Feature: As a User I should go to 'About' page and see some elements on page

  Scenario: Go to 'About' page and see some elements

    When I go 'home' page
    When I click 'About_link' element

    Then I should see 'we_are_mojo' element on page
    Then I should see 'about_image' element on page
    Then I should see 'We_are_the_free_online_mortgage_advisor' element on page
    Then I should see 'Its_time_to_see_your_remortgage' element on page
    Then I should see 'We_have_created_a_new_way_of_remortgage' element on page
    Then I should see 'Get_Remortgage_Power.With_Mojo' element on page
    Then I should see 'More_about_Mojo' element on page
    Then I should see 'Mojo_people' element on page
    Then I should see 'card_1_1' element on page
    Then I should see 'card_1_2' element on page
    Then I should see 'card_1_3' element on page
    Then I should see 'card_1_4' element on page
    Then I should see 'card_2_1' element on page
    Then I should see 'card_2_2' element on page
    Then I should see 'card_2_3' element on page
    Then I should see 'card_2_4' element on page
    Then I should see 'card_3_1' element on page
    Then I should see 'card_3_2' element on page
    Then I should see 'card_3_3' element on page
    Then I should see 'Want_a_challenge.Join_our_team' element on page
    When I click 'See_careers_page' element
    Then I should get 'Jobs_at_Mojo_Mortgages' title
    When I go 'home' page
    Then I should see 'Our_Investors' element on page
    Then I should see 'Blenheim_Chalcot' element on page
    Then I should see 'Countrywide' element on page

