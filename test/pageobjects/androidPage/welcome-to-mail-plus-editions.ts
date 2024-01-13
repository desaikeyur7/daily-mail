import Page from "../page";

class WelcomeToMailPlusEditionsPage extends Page {
    public get signinButton() {
        return $('//android.widget.TextView[@text="Sign in"]');
    }

    public get appStorePurchaseLink() {
        return $('//android.widget.TextView[@text="App Store subscribers restore purchase here"]');
    }
} 

export default new WelcomeToMailPlusEditionsPage()