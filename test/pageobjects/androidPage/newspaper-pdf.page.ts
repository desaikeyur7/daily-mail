import Page from "../page";

class NewspaperPdfPage extends Page {

    public get frontPage() {
        return $('//androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout');
    }

    public get frontPageTab() {
        return $('//android.widget.TextView[@text="Front page"]');
    }

    public get nextIcon() {
        return $('//android.view.ViewGroup[@content-desc="Next Article"]/android.view.ViewGroup');
    }

    public get imageGallery() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout[4]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView');
    }

    public get galleryImageCount() {
        return $('//android.view.View[@text="8"]');
    }

    public get imageCountTextOnImage() {
        return $('//android.widget.TextView[@text="1 of 9"]');
    }

    public get galleryCloseButton() {
        return $('//android.widget.TextView[@text="Close"]');
    }
}

export default new NewspaperPdfPage()