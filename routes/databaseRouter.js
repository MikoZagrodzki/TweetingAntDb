const express = require("express");
const pool = require("../database/config.js");
const router = express();
////////////////////////////////////////////////////
const {
  getLoginData,
    getLoginDataFromEmail,
    checkLoginData,
    insertLoginData,
////////////////////////////////////////////////////
  getUserNameUsedForTweets,
    getUserNameUsedForTweetsByEmail,
    checkUserNameUsedForTweets,
    insertUserNameUsedForTweets,
    deleteUserNameUsedForTweetsSpecific,
////////////////////////////////////////////////////
  getRephresedTweets,
    getRephresedTweetsByEmail,
    checkRephresedTweets,
    insertRephresedTweets,
////////////////////////////////////////////////////
  getLikedTweets,
    getLikedTweetsByEmail,
    checkLikedTweets,
    insertLikedTweets,
////////////////////////////////////////////////////
  getCommentedTweets,
    getCommentedTweetsByEmail,
    checkCommentedTweets,
    insertCommentedTweets,
////////////////////////////////////////////////////
  getRetweetedTweets,
    getRetweetedTweetsByEmail,
    checkRetweetedTweets,
    insertRetweetedTweets,
////////////////////////////////////////////////////
  getUserContent,
    getAllUserContent,  
    getUserContentByEmail,
    checkUserContent,
    insertUserContent,
    deleteUserContentSpecific,
    updateUserContentIsActive,
    updateUserContentLastTimeFetched,
    getUserContentIsActive,
    getAllUserNameUsedForTweets,
    getLoginDataAllBatches,
    getUserNameUsedForTweetsAllBatches,
    getUserContentAllBatches,
    getAllScrapedTweets,
    updateScrapedTweetText,
    updateScrapedTweetIsAprroved,
    updateScrapedTweetPicture,
    updateScrapedTweetVideo,
////////////////////////////////////////////////////
} = require("../models/databaseModels");
const { tweetPromptEnginered } = require("../gptFunctionalities/tweetWithPersonality.js");
const getChatGpt = require("../gptFunctionalities/fetchChatGpt.js");


///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.get("/database/login_Data", async function (req, res) {
  try {
    const result = await getLoginData();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/database/login_Data_All_Batches", async function (req, res) {
  try {
    const result = await getLoginDataAllBatches();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/login_Data_From_Email", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getLoginDataFromEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/check_Login_Data", async function (req, res) {
  try {
    const { loginNameTwitter, passwordTwitter } = req.body;
    const result = await checkLoginData(loginNameTwitter,passwordTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/insert_login_Data", async function (req, res) {
  try {
    const { email, loginNameTwitter, passwordTwitter } = req.body;
    const result = await insertLoginData(email,loginNameTwitter,passwordTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/database/user_Name_Used_For_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter, personality } = req.body;
    const result = await getUserNameUsedForTweets(loginNameTwitter, personality);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/database/user_Name_Used_For_Tweets_All", async function (req, res) {
  try {
    const result = await getAllUserNameUsedForTweets();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/database/user_Name_Used_For_Tweets_All_Batches", async function (req, res) {
  try {
    const result = await getUserNameUsedForTweetsAllBatches();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/user_Name_Used_For_Tweets_By_Email", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getUserNameUsedForTweetsByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/check_User_Name_Used_For_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter, username } = req.body;
    const result = await checkUserNameUsedForTweets(loginNameTwitter, username);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/insert_User_Name_Used_For_Tweets", async function (req, res) {
  try {
    const result = await insertUserNameUsedForTweets(req.body);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/delete_User_Name_Used_For_Tweets_Specific", async function (req, res) {
  try {
    const { loginNameTwitter, userNameUsedForTweets } = req.body;
    const result = await deleteUserNameUsedForTweetsSpecific(loginNameTwitter, userNameUsedForTweets);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/database/liked_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter } = req.body;
    const result = await getLikedTweets(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/liked_Tweets_By_Email", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getLikedTweetsByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/check_Liked_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter, tweetId } = req.body;
    const result = await checkLikedTweets(loginNameTwitter,tweetId);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/insert_liked_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter, tweetId } = req.body;
    const result = await insertLikedTweets(loginNameTwitter,tweetId);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/database/commented_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter } = req.body;
    const result = await getCommentedTweets(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/commented_Tweets_By_Email", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getCommentedTweetsByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/check_Commented_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter, tweetId } = req.body;
    const result = await checkCommentedTweets(loginNameTwitter, tweetId);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/insert_Commented_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter, tweetId } = req.body;
    const result = await insertCommentedTweets(loginNameTwitter, tweetId);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/database/retweeted_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter } = req.body;
    const result = await getRetweetedTweets(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/retweeted_Tweets_By_Email", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getRetweetedTweetsByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/check_Retweeted_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter, tweetId } = req.body;
    const result = await checkRetweetedTweets(loginNameTwitter, tweetId);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/insert_Retweeted_Tweets", async function (req, res) {
  const { loginNameTwitter, tweetId } = req.body;
  try {
    const result = await insertRetweetedTweets(loginNameTwitter, tweetId);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/database/rephresed_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter } = req.body;
    const result = await getRephresedTweets(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/rephresed_Tweets_By_Email", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getRephresedTweetsByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/check_Rephrased_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter, tweetId } = req.body;
    const result = await checkRephresedTweets(loginNameTwitter, tweetId);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/insert_Rephrased_Tweets", async function (req, res) {
  try {
    const { loginNameTwitter, tweetId } = req.body;
    const result = await insertRephresedTweets(loginNameTwitter, tweetId);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/database/user_Content", async function (req, res) {
  try {
    const { loginNameTwitter } = req.body;
    const result = await getUserContent(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/database/user_Content_All", async function (req, res) {
  try {
    const result = await getAllUserContent();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/database/user_Content_All_Batches", async function (req, res) {
  try {
    const result = await getUserContentAllBatches();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/user_Content_By_Email", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getUserContentByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/check_User_Content", async function (req, res) {
  try {
    const { loginNameTwitter, userContent } = req.body;
    const result = await checkUserContent(loginNameTwitter, userContent);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/insert_User_Content", async function (req, res) {
  try {
    const result = await insertUserContent(req.body);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/delete_User_Content_Specific", async function (req, res) {
  try {
    const { loginNameTwitter, userContent }= req.body;
    const result = await deleteUserContentSpecific(loginNameTwitter, userContent);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/database/get_User_Content_isActive", async function (req, res) {
  try {
    const { username }= req.body;
    const result = await getUserContentIsActive(username);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/update_User_Content_isActive", async function (req, res) {
  try {
    const { username, isActive }= req.body;
    const result = await updateUserContentIsActive(username, isActive);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/update_User_Content_Last_Time_Fetched", async function (req, res) {
  try {
    const { username, lastTimeFetched }= req.body;
    const result = await updateUserContentLastTimeFetched(username, lastTimeFetched);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.get("/database/get_All_Scraped_tweets", async function (req, res) {
  try {
    const result = await getAllScrapedTweets();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/update_Scraped_Tweet_Text", async function (req, res) {
  try {
    const { tweeturl, updatedText, sqlId }= req.body;
    const result = await updateScrapedTweetText(tweeturl, updatedText, sqlId);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/update_Scraped_Tweet_IsAprroved", async function (req, res) {
  try {
    const { tweeturl, isApproved, sqlId }= req.body;
    const result = await updateScrapedTweetIsAprroved(tweeturl, isApproved, sqlId);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/update_Scraped_Tweet_Picture", async function (req, res) {
  try {
    const { tweeturl, sqlId }= req.body;
    const result = await updateScrapedTweetPicture(tweeturl, sqlId);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/database/update_Scraped_Tweet_Video", async function (req, res) {
  try {
    const { tweeturl, sqlId }= req.body;
    const result = await updateScrapedTweetVideo(tweeturl, sqlId);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/database/tweet_with_personality", async function (req, res) {
  try {
    const { personality, tweet }= req.body;
    const result = await tweetPromptEnginered(personality, tweet);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});






module.exports = router
