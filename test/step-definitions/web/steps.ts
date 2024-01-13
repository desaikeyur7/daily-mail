

// import { Given, When, Then } from '@wdio/cucumber-framework';
import { Given } from '@wdio/cucumber-framework';
import loginPage from '../../pageobjects/login.page';

Given(/^I am on the Video Page$/, async () => {
    await loginPage.open()
    await browser.deleteAllCookies()

/* This part will be useful if the video is in iframe

 // get rid of cookies
 browser.execute(`document.cookie = "OptanonAlertBoxClosed=${new Date().toISOString()};";`)
 browser.refresh()

 // open video
 const video1 = $('.videoWrapperItemList')
 expect(video1).toBeClickable()
 video1.click()

 // Important! Switch to iframe to interact with video player
 const videoIframe:any = $('#IframeExteriorTwoyoutube.video-active')
 browser.switchToFrame(videoIframe)

 const player:any = $('#movie_player')

 // video is playing
 expect(player).toHaveElementClass('playing-mode')

 // pause video
 const playPauseButton:any = $('.ytp-play-button')
 expect(playPauseButton).toBeClickable()
 playPauseButton.click()

 // video is paused
 expect(player).toHaveElementClass('paused-mode')

 // check current time
 expect($('.ytp-time-current')).toHaveTextContaining('0:0')

 browser.pause(2000) // demo purposes
})

The above part will be useful if the video is in iframe */ 

    try{
    await browser.pause(5000)
    await $('button[class*="primary"]').waitForClickable()    
    await $('button[class*="primary"]').click()
    } catch {
        console.log("Got it button to accept cookies is not displayed")
    }

    //await $('[class="vjs-play-control vjs-control "]').scrollIntoView()
    await $('[class="vjs-play-control vjs-control "]').click()
    await $('[class="vjs-play-control vjs-control "]').scrollIntoView()


    //await $('.vjs-tech').click()
    //await browser.pause(50000)
    // const element:any = await $('div[data-ck-tag="click-overlay"]').moveTo()
    // await element.waitForDisplayed({ timeout: 5000 })
    //const adTime: string = await $$('.videoAdUiAttribution')[1].getText()
    //console.log("Ad Time is  =====2=2=2=2=2=2= ", adTime)
    
    await $('.vjs-tech').click()
    await browser.pause(3000)
    // await $('div[class$="news"] h2').scrollIntoView()
    // const currentTimeDisplay: string =  await $('.vjs-current-time-display span').getText()
    // console.log("The time is ==============", currentTimeDisplay)
    // await browser.pause(15000)
    // await $('[class="videoAdUiSkipButtonExperimentalText"]').click()
    //await $('[class*="vjs-play-control vjs-control  vjs-playing"]').click()
    await $('[class="mol-skip-control vjs-control"]').click()
    await browser.pause(3000)
    await $('[class="mol-previous-control vjs-control"]').click()
    await browser.pause(3000)
    await $('[class*="vjs-volume-menu-button"]').click()
    await browser.pause(3000)
    await $('[class*="vjs-volume-menu-button"]').click()
    await browser.pause(10000)

// 4) Click on the forward arrow to change to the next video
// 5) Click on the back arrow to navigate to the previous video
// 6) Click on the speaker icon to mute the video
// 7) Click on the speaker icon again to unmute the video
// 8) When video is finished, next video should autoplay

});