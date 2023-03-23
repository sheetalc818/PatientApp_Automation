
class LoginPage {

    get onsignup_page() { return $('h1=Sign Up'); }

    get phone_number_field() { return $('[formcontrolname="phoneNumber"]'); }

    get country_code() { return $('[formcontrolname="countryCode"]')};

    get error_message() { return $('//*[@id="mat-error-4"]'); }

    errorMessageContainer(message) { return $(`mat-error*=${message}`); }
}
export default new LoginPage();
