import { Given, When, Then } from '@wdio/cucumber-framework';
import welcomePage from '../../pageobjects/androidPage/welcome.page';
import commonElements from '../../pageobjects/androidPage/common.elements';
import newspaperViewPage from '../../pageobjects/androidPage/newspaper-view-page';
import androidUtils from '../../utils/android.utils';
import latestViewPage from '../../pageobjects/androidPage/latest-view.page';
import bestOfTheMailPage from '../../pageobjects/androidPage/best-of-the-mail.page';
import puzzlesPage from '../../pageobjects/androidPage/puzzles.page';
import mailPlusHomePage from '../../pageobjects/androidPage/mail-plus-home.page';
import allIssuesPage from '../../pageobjects/androidPage/all-issues.page';
import welcomeToMailPlusEditionsPage from '../../pageobjects/androidPage/welcome-to-mail-plus-editions';
import signinPage from '../../pageobjects/androidPage/signin-page';
import newspaperPdfPage from '../../pageobjects/androidPage/newspaper-pdf.page';

Given(/^I am on the Welcome page$/, async () => {
  await welcomePage.welcomeText.waitForDisplayed({ timeout: 5000 });
});

When(/^I click continue button$/, async () => {
  await androidUtils.closeErrorMessage();
  await browser.pause(1000);
  await commonElements.continueButton.click();
});

When(/^I navigate to The Newspaper view page$/, async () => {
  await newspaperViewPage.newspaperViewMessage.waitForDisplayed({ timeout: 10000 });
});

When(/^I navigate to The Latest view page$/, async () => {
  await latestViewPage.latestViewmessage.waitForDisplayed({ timeout: 10000 });
});

When(/^I navigate to Best of The Mail page$/, async () => {
  await bestOfTheMailPage.bestOfTheMailMessage.waitForDisplayed({ timeout: 10000 });
});

When(/^I navigate to Puzzles page$/, async () => {
  await puzzlesPage.puzzlesMessage.waitForDisplayed({ timeout: 10000 });
});

When(/^I navigate to The Mail Plus homepage$/, async () => {
  await mailPlusHomePage.newspaperTab.isEnabled();
});

When(/^I click on the archive icon$/, async () => {
  await mailPlusHomePage.archiveIcon.click();
});

When(/^I navigate to Archive tab on All issues page$/, async () => {
  await allIssuesPage.archiveTab.isEnabled();
});

When(/^I click on the download icon on 9 January 2024 edition$/, async () => {
  await allIssuesPage.downloadNewspaperIcon.click();
});

When(/^I navigate to Welcome to Mail Plus Editions page$/, async () => {
  await welcomeToMailPlusEditionsPage.appStorePurchaseLink.waitForDisplayed({ timeout: 10000 });
});

When(/^I click on the signin button$/, async () => {
  await welcomeToMailPlusEditionsPage.signinButton.click();
});

When(/^I navigate to the signin page$/, async () => {
  await signinPage.signinMessage.waitForDisplayed({ timeout: 10000 });
});

When(/^I sign in using "([^"]*)" and "([^"]*)"$/, async (emailAddress: string, password: string) => {
  await signinPage.emailAddress.clearValue();
  await signinPage.emailAddress.addValue(emailAddress);
  await signinPage.password.addValue(password);
  await signinPage.signinButton.click();
});

Then(/^The 9 January 2024 edition is successfully downloaded$/, async () => {
  // Added a long explicit wait as it takes about 130 - 135 seconds to download newspaper once signed in
  await newspaperPdfPage.frontPageTab.waitForDisplayed({ timeout: 140000 });
});

When(/^I tap on the front page of the newspaper$/, async () => {
  await androidUtils.tapOnFrontPage();
});

When(/^I navigate to the first page of Newspaper$/, async () => {
  await newspaperPdfPage.nextIcon.waitForDisplayed({ timeout: 6000 });
});

When(/^I click the next article icon to navigate to the third article$/, async () => {
  await androidUtils.navigateToPageThree();
});

When(/^I click on image on the story page to open the image gallery$/, async () => {
  await androidUtils.openImageGallery();
});

When(/^I navigate to the last image in the image gallery$/, async () => {
  await androidUtils.swipeToLastImageInGallery();
});

When(/^I click the close icon on the last image to close gallery$/, async () => {
  await androidUtils.closeImageGallery();
});

Then(/^I should return to the story page$/, async () => {
  await newspaperPdfPage.nextIcon.waitForDisplayed({ timeout: 10000 });
});