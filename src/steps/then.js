import { Then } from '@cucumber/cucumber';
import { Map } from '../page_objects/map';
//import LoginPage from '../page_objects/login.page.js';

Then(/^I should see Sign Up screen is displayed$/, () => {
    Map.LoginPage.onsignup_page.isDisplayed();
});

Then(/^I should see Sign In Screen$/,()=>{
    // const signin_screen = $("//header/img");
    // expect(signin_screen).toBeDisplayed();
});

Then(/^I input mobile number as "([^"]*)?"$/, (Mobile_No) => {
    const pattern = /^[1-9][0-9]*$/;
    if(pattern.test(Mobile_No)){
        Map.LoginPage.phone_number_field.setValue(Mobile_No);
        browser.pause(10000);
    }
    // else if (Mobile_No == 0){
    //     Map.LoginPage.phone_number_field.setValue(Mobile_No);
    //     Map.LoginPage.error_message.isDisplayed();
    //     console.log(Map.LoginPage.error_message.getText());
    // }
});

Then(/^I expect error message "([^"]*)?"$/, (expectedMessage) => {

    const el = Map.LoginPage.errorMessageContainer(expectedMessage);

    expect(el).toBeDisplayed();
});

Then(/^I should get message as "([^"]*)?"$/,(Message)=>{
    console.log(Message);
})


