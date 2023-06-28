const {
  By,
  Key,
  Builder,
  until,
  WebDriver,
  WebElement,
  Actions,
  WebDriverWait,
  TouchSequence,
} = require("selenium-webdriver");
require("chromedriver");

/////////NORMAL/////////
const _http = require("selenium-webdriver/http");
/////////MOBILE/////////
const chrome = require('selenium-webdriver/chrome');
////////////////////////

let drivers = {};
// Define a constant delay time in milliseconds
const delayTime = 2000;
// Create a new WebDriver instance
  // const driver = new Builder().forBrowser("chrome").build();
// Define a custom method to pause execution for a specified period of time
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
///////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////DESKTOP///////////
// let twitter_driver = async function (driverId) {
//   if (drivers[driverId]) {
//     console.log(`Driver id: ${driverId} mounted already.`)
//     return;
//   }
//   try {
//     let driver = await new Builder().forBrowser("chrome").build();
//     drivers[driverId] = driver;
//   }catch(error) {
//   console.log(error)
//   }
// };
///////////MOBILE///////////
async function twitter_driver(driverId) {
  if (drivers[driverId]) {
    console.log(`Driver id: ${driverId} mounted already.`);
    return;
  }
  try {
    const mobileEmulation = {
      deviceName: "iPhone X"
    };
    const chromeOptions = new chrome.Options();
    chromeOptions.addArguments("--disable-infobars");
    chromeOptions.addArguments("--disable-notifications");
    chromeOptions.addArguments("--incognito");
    chromeOptions.addArguments("--disable-extensions");
    chromeOptions.addArguments("--disable-gpu");
    chromeOptions.addArguments("--disable-browser-side-navigation");
    chromeOptions.addArguments("--disable-dev-shm-usage");
    chromeOptions.addArguments("--no-sandbox");
    chromeOptions.addArguments("--disable-setuid-sandbox");
    chromeOptions.addArguments("--disable-setgid-sandbox");
    chromeOptions.addArguments("--window-size=360,1000");
    chromeOptions.setMobileEmulation(mobileEmulation);
    const driver = await new Builder().forBrowser("chrome").setChromeOptions(chromeOptions).build();
    drivers[driverId] = driver;
  } catch (error) {
    console.log(error);
  }
}

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function twitter_login(driverId, email, password) {
  let driver = drivers[driverId]
  if(!driver){
    console.log(`Driver id: ${driverId} not found`)
    return
  }
  try{
    await driver.get("https://twitter.com/login"); 
    await delay(1500)
    await driver.navigate().refresh();
    await delay(2000)
    let emails = await driver.wait(until.elementLocated(By.xpath("//input[@name='text']")),30000,10000);
    await emails.sendKeys(email, Key.RETURN);
    let passwords = await driver.wait(until.elementLocated(By.xpath("//input[@name='password']")),30000,10000);
    await passwords.sendKeys(password, Key.RETURN);
    await delay(3000)
    // let pleaseTryAgainLater = await driver.wait(until.elementLocated(By.xpath("//*[text()='Oops, something went wrong. Please try again later.']")),4000,1000);
    // if(pleaseTryAgainLater){
    //   await delay(2500)
    //   await driver.get("https://twitter.com/login"); 
    //   let emails = await driver.wait(until.elementLocated(By.xpath("//input[@name='text']")),30000,10000);
    //   await emails.sendKeys(email, Key.RETURN);
    //   let passwords = await driver.wait(until.elementLocated(By.xpath("//input[@name='password']")),30000,10000);
    //   await passwords.sendKeys(password, Key.RETURN);
    //   await delay(3000)
    //   // await driver.navigate().refresh();
    //   // await twitter_login(driverId, email, password)
    // }
    let cookiesPopup = await driver.wait(until.elementLocated(By.xpath("//*[text()='Refuse non-essential cookies']")),4000,1000);
    await driver.wait(until.elementIsEnabled(cookiesPopup));
    await cookiesPopup.click()
    return;
  } catch(error) {
      console.log(error)
  }
  try {
    await driver.get("https://twitter.com");
    let cookiesPopup = await driver.wait(until.elementLocated(By.xpath("//*[text()='Refuse non-essential cookies']")),4000,1000);
    await driver.wait(until.elementIsEnabled(cookiesPopup));
    await cookiesPopup.click()
    return;
  }catch (error) {
    console.log(error)
    // let cookiesPopup = await driver.wait(until.elementLocated(By.xpath("//*[text()='Refuse non-essential cookies']")),4000,1000);
    // await driver.wait(until.elementIsEnabled(cookiesPopup));
    // await cookiesPopup.click()
    return;
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////DESKTOP///////////
// async function twitter_add_rephrased_post(driverId, text){
//   let driver = drivers[driverId]
//   if(!driver){
//     console.log(`Driver id: ${driverId} not found`)
//     return 
//   }
//   try{
//     await driver.get("https://twitter.com");
//     postArea = await driver.wait(until.elementLocated(By.xpath("//div[@aria-label='Tweet text']"
//       )),30000,10000);
//     await postArea.sendKeys(text, Key.RETURN);
//     postButton = await driver.wait(until.elementLocated(By.xpath("//div[@data-testid='tweetButtonInline']")),30000,10000);
//     await driver.wait(until.elementIsEnabled(postButton), 10000);
//     await postButton.click();
//   }catch(error){
//     throw new Error(error)
//   }
// }
////////MOBILE//////////
async function twitter_add_rephrased_post(driverId, text){
  let driver = drivers[driverId]
  if(!driver){
    console.log(`Driver id: ${driverId} not found`)
    return 
  }
  try{
    await driver.get("https://twitter.com");
    composeTweet = await driver.wait(until.elementLocated(By.xpath("//a[@aria-label='Compose a Tweet']")),30000,10000);
    if(!composeTweet){
      composeTweet = await driver.wait(until.elementLocated(By.xpath("//a[@aria-label='Tweet']")),30000,10000);
    }
    await composeTweet.click()
    tweetArea = await driver.wait(until.elementLocated(By.xpath("//textarea[@aria-label='Tweet text']")),30000,10000);
    await tweetArea.sendKeys(text, Key.RETURN);
    postButton = await driver.wait(until.elementLocated(By.xpath("//div[@data-testid='tweetButton']")),30000,10000);
    await driver.wait(until.elementIsEnabled(postButton), 10000);
    await postButton.click();
  }catch(error){
    throw new Error(error)
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////MOBILE///////////
async function twitter_like_tweet(driverId, url) {
  let driver = drivers[driverId];
  if(!driver){
    console.log(`Driver id: ${driverId} not found`);
    return;
  }
  let likeButton; 
  try{
    await driver.get(url);
    likeButton = await driver.wait(until.elementLocated(By.xpath("//div[@aria-label='Like']")), 15000, 1000);     
    await driver.executeScript("arguments[0].scrollIntoView();", likeButton);
    await driver.executeScript("window.scrollBy(0, -100);"); 
    // let likeButton = await driver.wait(until.elementLocated(By.xpath("//div[@aria-label='Like']")), 15000, 1000);
    const isInteractable = await likeButton.isEnabled();
    if (isInteractable) {
      // await driver.executeScript("arguments[0].scrollIntoView();", likeButton);
      // await driver.executeScript("window.scrollBy(0, -100);"); 
      // likeButton = await driver.findElement(By.xpath("//div[@aria-label='Like']"));
      await likeButton.click();
    }
    return;
  }
  catch(error){ 
    console.log(error);
  }
}

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// async function twitter_retweet_tweet(driverId, url) {
//   let driver = drivers[driverId]
//   if(!driver){
//     console.log(`Driver id: ${driverId} not found`)
//     return 
//   }
//   try {
//   await driver.get(url);
//   retweetButton = await driver.wait(until.elementLocated(By.xpath("//div[@aria-label='Retweet']")),30000,10000);
//   await driver.wait(until.elementIsEnabled(retweetButton));
//   await delay(1500);
//   await retweetButton.click();
//   popup = await driver.wait(until.elementLocated(By.xpath("//div[@data-testid='retweetConfirm']")),30000,10000);
//   await driver.wait(until.elementIsEnabled(popup));
//   await delay(1500);
//   await popup.click()
//   } catch(error) {
//     console.log(error)
//   }
// }
////////////MOBILE//////////
async function twitter_retweet_tweet(driverId, url) {
  let driver = drivers[driverId]
  if(!driver){
    console.log(`Driver id: ${driverId} not found`)
    return 
  }
  try {
    await driver.get(url);
    const disableAnimationsCSS = `
    * {
      -webkit-transition: none !important;
      -moz-transition: none !important;
      -o-transition: none !important;
      -ms-transition: none !important;
      transition: none !important;
      -webkit-animation: none !important;
      -moz-animation: none !important;
      -o-animation: none !important;
      -ms-animation: none !important;
      animation: none !important;
    }
    `;
    await driver.executeScript("let style = document.createElement('style'); " +
                "style.type = 'text/css'; " +
                "style.innerHTML = arguments[0]; " +
                "document.head.appendChild(style);", disableAnimationsCSS);

    await delay(1500);
    retweetButton = await driver.wait(until.elementLocated(By.xpath("//div[@aria-label='Retweet' and @role='button']")),7000,1000);
    await driver.executeScript("arguments[0].scrollIntoView();", retweetButton);
    await driver.executeScript("window.scrollBy(0, -150);"); 
    retweetButton =  await driver.findElement(By.xpath("//div[@aria-label='Retweet' and @role='button']"));
    await driver.executeScript("arguments[0].dispatchEvent(new Event('click', {bubbles: true}));", retweetButton);  
    
    await delay(2500);
    await driver.wait(until.elementLocated(By.xpath("//div[@data-testid='retweetConfirm' and @role='menuitem']")),7000,1000);
    const popup = await driver.findElement(By.xpath("//div[@data-testid='retweetConfirm' and @role='menuitem']"));

    await driver.executeScript("arguments[0].dispatchEvent(new Event('click', {bubbles: true}));", popup);
    await delay(2500);
    return;
  } catch(error) {
    console.log(error)
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function twitter_comment_tweet(driverId, url, text) {
  let driver = drivers[driverId]
  if(!driver){
    console.log(`Driver id: ${driverId} not found`)
  }
  await driver.get(url);
  try {
  await driver.wait(until.elementLocated(By.xpath("//div[@aria-label='Reply']")), 5000);
  const replyButton = await driver.findElement(By.xpath("//div[@aria-label='Reply']"));
  let isInteractable = await replyButton.isEnabled();
  if (isInteractable) {
    await driver.executeScript("arguments[0].scrollIntoView();", replyButton);
    await driver.executeScript("window.scrollBy(0, -100);"); 
    await replyButton.click();
  }
  const actions = driver.actions();
  await delay(2000);
  await actions.sendKeys(text, Key.RETURN).perform();
  await driver.wait(until.elementLocated(By.xpath("//div[@data-testid='tweetButton']")),30000,10000);
  const submitButton = await driver.findElement(By.xpath("//div[@data-testid='tweetButton']"));
  isInteractable = await submitButton.isEnabled();
  if (isInteractable) {
    await submitButton.click();
  }
  await delay(2500);
  return;
  } catch(error) { 
    console.log(error)
    throw error 
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function twitter_like_all_tweets(driverId, username, tweetId) {
  let driver = drivers[driverId]
  if(!driver){
    console.log(`Driver id: ${driverId} not found`)
    return 
  }
  try{
  await driver.get(`https://twitter.com/${username}/status/${tweetId}`);
  likeButton = await driver.wait(until.elementLocated(By.xpath("//div[@aria-label='Like']")
    ),30000,10000);
  await likeButton.click()
  }catch (error) {
    console.log(error)
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function randomPixels() {
  let minPixels = -350;
  let maxPixels = 350;
  
  let randomValue = Math.floor(Math.random() * (maxPixels - minPixels)) + minPixels;
  return randomValue;
}

async function twitter_random_scroll(driverId) {
  let driver = drivers[driverId]
  if(!driver){
    console.error(`Driver id: ${driverId} not found`)
    return; 
  }
  
  await driver.get(`https://twitter.com/`);
  const randomLoopNumber =  Math.floor(Math.random() * 4) + 2;
  try{
    for (let index = 0; index <= randomLoopNumber; index++) {
      let randomDelay = Math.floor(Math.random() * 1000) + 500;
      // let scroll = driver.actions();
      // await scroll.moveByOffset(0, randomPixels()).perform();

      await driver.executeScript(`window.scrollBy(0, ${randomPixels()});`);

      // let scroll = new Actions(driver);
      // await scroll.moveByOffset(0, randomPixels()).perform();

      await delay(randomDelay);
    }
  }catch (error) {
    console.log(error)
  }
}

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
module.exports = {
  drivers,
  twitter_login,
  twitter_driver,
  twitter_add_rephrased_post,
  twitter_like_tweet,
  twitter_retweet_tweet,
  twitter_comment_tweet,
  twitter_like_all_tweets,
  twitter_random_scroll
};



