let inheritance = require('./../inheritance');
let Page = require('./page');
let Home = function (){};
inheritance.inherits(Page,Home);


Home.prototype.url = 'http://frictionless-website.azurewebsites.net/';

Home.prototype.data = {
    'about': {
        selector: element.all(by.xpath('/html/body/div/header/div/div/nav/ul/li[1]/a')),
        index: 0
    },
    'gotit': {
        selector: element.all(by.xpath('/html/body/div/footer/div[2]/div/div/a')),
        index: 0
    },
    'signup': {
        selector: element.all(by.xpath('/html/body/div/header/div/div/div/a')),
        index: 0
    },


    'logo': {
       selector: element.all(by.xpath('/html/body/div/header/div/div/a')),
       index: 0
    },
    'home_image': {
        selector: element.all(by.css('body > div > div.banner.banner__vh > div.b-container > div')),
        index: 0
    },
    'CTA_meet_mojo': {
       selector: element.all(by.xpath('//*[@id="toBottom"]/div[1]/div')),
       index: 0
    },
    'title_morgage_advozor': {
       selector: element.all(by.xpath('/html/body/div/article/div[1]/div/div/div[1]/h2')),
      // elText: 'The free online mortgage advisor built around you – not the lenders',
       index: 0
    },
    'get_remortgage_power': {
        selector: element.all(by.xpath('/html/body/div/article/div[1]/div/div/div[1]/div')),
        index: 0
    },
    'Get_your_free_Mortgage_Personality': {
       selector: element.all(by.xpath('//*[@id="interviewMain"]/div/div/div[3]/h2')),
       elText: 'Get your free Mortgage Personality',
       index: 0
    },
    'A_better_way_to_remortgage': {
        selector: element.all(by.xpath('/html/body/div/article/div[3]/div/div/h2')),
       // elText: 'A better way to remortgage – step by step',
        index: 0
    },
    'your_journey': {
       selector: element.all(by.xpath("/html/body/div/article/div[3]/div/div/div/div[1]/div[1]/h3")),
       elText: 'YOUR JOURNEY',
       index: 0
    },
    'your_profile': {
        selector: element.all(by.xpath('/html/body/div/article/div[3]/div/div/div/div[2]/div[1]/h3')),
        elText: 'YOUR PROFILE',
        index: 0
    },
    'your_tools': {
       selector: element.all(by.xpath('/html/body/div/article/div[3]/div/div/div/div[3]/div[1]/h3')),
       elText: 'YOUR TOOLS',
       index: 0
    },
    'your_mortgage': {
       selector: element.all(by.xpath('/html/body/div/article/div[3]/div/div/div/div[4]/div[1]/h3')),
       elText: 'YOUR MORTGAGE',
       index: 0
    },
    'Letstarted': {
    selector: element.all(by.xpath('//*[@id="interviewMain"]/div/div/div[3]/button')),
    index: 0
    },
     'Your_mindset_window':{
     selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[1]/div[1]/h3')),
     elText: 'Your Mindset',
     index: 0
    },
    'back':{
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[1]/div[3]/button')),
    index: 0
    },
    'question_1': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[1]/div[2]/p')),
   // elText: '1. FIrst things first: How are you feeling about remortgaging?',
    index: 0
    },
    'worried': {
    selector: element.all(by.id('//*[@id="interviewQuestions"]/div/div[2]/div[1]/div[2]/div/button[1]')),
    index: 0
    },
    'question_2': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[2]/div[2]/p')),
  //  elText: '2. Second, let’s get some details about your home. How much longer do you want to live in your property?',
    index: 0
    },
    'between_2_and_5_years': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[2]/div[2]/div/button[2]')),
    index: 0
    },
    'question_3': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[3]/div[2]/p')),
  //  elText: '3. And do you have any big plans for your home over the next two years?',
    index: 0
    },
    'No_plans': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[3]/div[2]/div/button[3]')),
    index: 0
    },
    'question_4': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[4]/div[2]/p')),
  //  elText: '4. Now, let’s talk a bit about your job. Are you expecting any big changes in income over the next two years?',
    index: 0
    },
    'a_pay_rise_of_20%_or_more': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[4]/div[2]/div/button[1]')),
    index: 0
    },
    'question_5': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[5]/div[2]/p')),
    //elText: '5. Do you have any exciting career changes planned?',
    index: 0
    },
    'Nothing_major_planned': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[5]/div[2]/div/button[4]')),
    index: 0
    },
    'question_6': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[6]/div[2]/p')),
    //elText: '6. Next, we want to get a picture of your current mortgage situation. How are you finding your monthly repayments today?',
    index: 0
    },
    'I_am_comfortable': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[6]/div[2]/div/button[3]')),
    index: 0
    },
    'question_7': {
     selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[7]/div[2]/p')),
    // elText: '7. And do you have anything coming up that you’d like to save for?',
     index: 0
    },
    'A_new_baby': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[7]/div[2]/div/button[2]')),
    index: 0
    },
    'question_8': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[8]/div[2]/p')),
   // elText: '8. Okay, now let’s get a feel for your financial situation. Do you have any debt at the minute? (Your mortgage might be able to help you pay it off).',
    index: 0
    },
    'No_button': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[8]/div[2]/div/button[3]')),
    index: 0
    },
    'question_9': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[9]/div[2]/p')),
  //  elText: '9. And do you have any savings you could put towards your mortgage?',
    index: 0
    },
    'elem10K': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[9]/div[2]/div/button[1]')),
    index: 0
    },
    'question_10': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[10]/div[2]/p')),
   // elText: '10. Last question: When it comes to your mortgage, what's your attitude to uncertainty?',
    index: 0
    },
    'Somewhere_in-between': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[10]/div[2]/div/button[3]')),
    index: 0
    },
   'result_title': {
    selector: element.all(by.xpath('//*[@id="monthlySaver"]/h2')),
    //elText: 'Monthly Saver',
    index: 0
    },
    'See_results': {
    selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[11]/div[2]/button[2]')),
    index: 0
    },
    'Want_to_lower_your_monthly_repayments' : {
    selector: element.all(by.xpath('//*[@id="monthlySaverMore"]/div[2]/div/h3')),
    elText: 'Want to lower your monthly repayments?',
    index: 0
    }
};
module.exports = Home;
