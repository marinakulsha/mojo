
  Feature: As a User I should go to 'home' page and see some elements on page

    Scenario: Should go to 'home' page and see some elements
      When I go to 'home' page
      When I click 'gotit' element
      #When I click 'signup' element
      #When I click 'about' element
     # When I click 'logo' element
      #Then I should see 'home_image' element on page
      Then I should see 'CTA_meet_mojo' element on page
      When I click 'CTA_meet_mojo' element
      Then I should see 'title_morgage_advozor' element on page
      When I scroll the page to 'get_remortgage_power' element
      Then I should see 'get_remortgage_power' element on page
      When I click 'get_remortgage_power' element
      Then I should see 'Get_your_free_Mortgage_Personality' element on page
      Then I should see 'A_better_way_to_remortgage' element on page
      Then I should see 'your_journey' element on page
      Then I should see 'your_profile' element on page
      Then I should see 'your_tools' element on page
      Then I should see 'your_mortgage' element on page

    Scenario: Should click the 'Letstarted’ button and get mortgage personality
      When I scroll the page to 'Letstarted' element
      When I click 'Letstarted' element
      Then I should see 'Your_mindset_window' element on page
      When I click 'back' element
      When I click 'Letstarted' element
      Then I should see 'question_1' element on page
      When I click 'worried' element
      Then I should see 'question_2' element on page
      When I click 'between_2_and_5_years' element
      Then I should see 'question_3' element on page
      When I click 'No_plans' element
      Then I should see 'question_4' element on page
      When I click 'a_pay_rise_of_20%_or_more' element
      Then I should see 'question_5' element on page
      When I click 'Nothing_major_planned' element
      Then I should see 'question_6' element on page
      When I click 'I_am_comfortable' element
      Then I should see 'question_7' element on page
      When I click 'A_new_baby' element
      Then I should see 'question_8' element on page
      When I click 'No_button' element
      Then I should see 'question_9' element on page
      When I click 'elem10K' element
      Then I should see 'question_10' element on page
      When I click 'Somewhere_in-between' element
      Then I should see 'result_title' element on page
      When I click 'See_results' element
      Then I should see 'Want_to_lower_your_monthly_repayments' element on page
