import { DataTable, When} from '@cucumber/cucumber';
import {Map} from '../page_objects/map';

When(/^I click on Log in link$/,()=>{
    const login = $('button=Log In');
    login.click();
    browser.pause(10000);
});

When(/^I should see Mobile field$/,()=>{
    const phone_number_field = $('[formcontrolname="phoneNumber"]');
    expect(phone_number_field).toBeDisplayed();
});

When(/^I select Singapore Country_Code$/, () => {
    Map.LoginPage.country_code.click();
    const singapore_code=$('span=+65 Singapore');
    singapore_code.isDisplayed();
    singapore_code.click();
    browser.pause(500);
});

When(/^I select Malaysia Country_Code$/,()=>{
    Map.LoginPage.country_code.click();
    const singapore_code=$('span=+60 Malaysia');
    singapore_code.isDisplayed();
    singapore_code.click();
    browser.pause(500);
})

When(/^I select Philippines Country_Code$/,()=>{
    Map.LoginPage.country_code.click();
    const singapore_code=$('span=+63 Philippines');
    singapore_code.isDisplayed();
    singapore_code.click();
    browser.pause(500);
})


