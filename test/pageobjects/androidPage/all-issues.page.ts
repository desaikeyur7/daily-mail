import Page from "../page";

class AllIssuesPage extends Page {

    public get archiveTab() {
        return $('//android.widget.TextView[@text="Archive"]');
    }

    public get downloadNewspaperIcon() {
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup');
    }
}

export default new AllIssuesPage()