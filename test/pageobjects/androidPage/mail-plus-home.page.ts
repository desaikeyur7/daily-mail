import Page from "../page";

class MailPlusHomePage extends Page {

    public get newspaperTab() {
        return $('//android.widget.Button[@content-desc="Newspaper"]/android.view.ViewGroup');
    }

    public get archiveIcon() {
        return $('//android.view.ViewGroup[@content-desc="Tap me to open the archive"]/android.view.ViewGroup/android.view.ViewGroup');
    }
}

export default new MailPlusHomePage()