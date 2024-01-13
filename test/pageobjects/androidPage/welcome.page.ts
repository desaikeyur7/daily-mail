import Page from "../page";

class WelcomePage extends Page{

    public get welcomeText() {
        return $('//android.widget.TextView[@text="Thank you for downloading the app. Allow us to give you a quick tour"]')
    }
}

export default new WelcomePage()