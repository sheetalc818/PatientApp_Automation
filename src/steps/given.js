import { Given } from '@cucumber/cucumber';
import { Map } from '../page_objects/map';

Given('I launch V2 Application',() => {

});

Given('I switch to webview', ()=> {
    const contexts = driver.getContexts();
    console.log(contexts);
    driver.switchContext(contexts[1]);
});

Given('I am on Sign Up Screen',()=>{
    Map.LoginPage.onsignup_page.isDisplayed();
    browser.pause(10000);
});

Given('I am on Sign In Screen',()=>{
    const sign_in= browser.getTitle();
    console.log("Sign In title : "+ sign_in);
})