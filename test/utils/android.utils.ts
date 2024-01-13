import Page from "../pageobjects/page";
import commonElements from '../pageobjects/androidPage/common.elements';
import newspaperPdfPage from "../pageobjects/androidPage/newspaper-pdf.page";

class AndroidUtils extends Page {
    public async tapScreen(el: string) {
        const screen = await $(`${el}`);

        await browser.touchAction({
            action: 'tap',
            element: screen
        });
    }

    public async closeErrorMessage() {
        try{
        await commonElements.errorCloseButton.waitForDisplayed({ timeout: 3000 })
        await commonElements.errorCloseButton.click();
        } catch {
            console.log("Error message is not displayed. The message is already closed before or the test is running in production.")
        }
    }

    public async tapOnFrontPage() {
        await this.tapScreen('//androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout');
    }

    public async navigateToPageThree() {
        await this.closeErrorMessage()
        await newspaperPdfPage.nextIcon.waitForDisplayed({ timeout: 6000 });
        await newspaperPdfPage.nextIcon.click();
        await newspaperPdfPage.nextIcon.waitForDisplayed({ timeout: 3000 });
        await newspaperPdfPage.nextIcon.click();
    }

    public async getTotalImageCountFromGalleryIcon() {
        await newspaperPdfPage.galleryImageCount.waitForDisplayed({ timeout:10000 });
        const imageCount: string = await newspaperPdfPage.galleryImageCount.getText();
        const totalImageCount: number = parseInt(imageCount) + 1;
        return totalImageCount;
    }

    public async openImageGallery() {
        await newspaperPdfPage.imageGallery.waitForDisplayed({ timeout:10000 });
        const totalNumberOfGalleryImages = (await this.getTotalImageCountFromGalleryIcon()).toString();
        await this.tapScreen('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout[4]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView');
        expect(await newspaperPdfPage.imageCountTextOnImage.getText()).toEqual(`1 of ${totalNumberOfGalleryImages}`);
    }

    public async swipeToLastImageInGallery() {
        await newspaperPdfPage.imageCountTextOnImage.waitForDisplayed({ timeout: 10000 });
        const imageCountTextInGallery: string = await newspaperPdfPage.imageCountTextOnImage.getText();
        const imageCountFromText: number = parseInt(imageCountTextInGallery.slice(-1));
        for (let i: number = 0; i < imageCountFromText; i++) {
            await browser
                .action('pointer')
                .move(555, 1154)
                .down()
                .pause(10)
                .move({ x: 555, y: 1154 })
                .up()
                .perform();
        }
    }

    public async closeImageGallery() {
        await newspaperPdfPage.galleryCloseButton.waitForDisplayed({ timeout: 5000 });
        await newspaperPdfPage.galleryCloseButton.click();
    }
}

export default new AndroidUtils();