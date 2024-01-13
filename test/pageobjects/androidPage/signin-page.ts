import Page from "../page";

class SignInPage extends Page {

    public get signinMessage() {
        return $('//android.view.View[@text="Sign in to your Mail account"]');
    }

    public get signinButton() {
        return $('//android.widget.Button[@text="Sign in"]');
    }

    public get emailAddress() {
        return $('//android.widget.EditText[@resource-id="login.email"]');
    }

    public get password() {
        return $('//android.widget.EditText[@resource-id="login.password"]');
    }
}

export default new SignInPage()