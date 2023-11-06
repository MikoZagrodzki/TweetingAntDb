const express = require("express");
const router = express();
const {getTimeToTweets,
    getTimeToTweetsByEmail,
    insertTimeToTweets,
    deleteTimeToTweets,
    deleteTimeToTweetsSpecific,
    updateTimeToTweetsSpecific,
////////////////////////////////////////////////
        getTimeToLikes,
    getTimeToLikesByEmail,
    insertTimeToLikes,
    deleteTimeToLikes,
    deleteTimeToLikesSpecific,
    updateTimeToLikesSpecific,
////////////////////////////////////////////////
        getTimeToRetweets,
    getTimeToRetweetsByEmail,
    insertTimeToRetweets,
    deleteTimeToRetweets,
    deleteTimeToRetweetsSpecific,
    updateTimeToRetweetsSpecific,
////////////////////////////////////////////////
        getTimeToComments,
    getTimeToCommentsByEmail,
    insertTimeToComments,
    deleteTimeToComments,
    deleteTimeToCommentsSpecific,
    updateTimeToCommentsSpecific,
////////////////////////////////////////////////
    getIsAutomated,
    updateIsAutomated,
////////////////////////////////////////////////
    getTweetsIntensivity,
    updateTweetsIntensivity,
////////////////////////////////////////////////
    getLikesIntensivity,
    updateLikesIntensivity,
////////////////////////////////////////////////
    getRetweetsIntensivity,
    updateRetweetsIntensivity,
////////////////////////////////////////////////
    getCommentsIntensivity,
    updateCommentsIntensivity,
////////////////////////////////////////////////
    getPersonality,
    updatePersonality,
////////////////////////////////////////////////
    getIntensivity,
    getIntensivityByEmail,
    updateAllIntensivity,
    insertIntensivity,
////////////////////////////////////////////////
    getLikesAttackByUsername,
    getLikesAttackByEmail,
    insertLikesAttack,
    deleteLikesAttackSpecific,
////////////////////////////////////////////////
    getRetweetsAttackByUsername,
    getRetweetsAttackByEmail,
    insertRetweetsAttack,
    deleteRetweetsAttackSpecific,
////////////////////////////////////////////////////
    getCommentsAttackByUsername,
    getCommentsAttackByEmail,
    insertCommentsAttack,
    deleteCommentsAttackSpecific,
////////////////////////////////////////////////////
    getRephraseAttackByUsername,
    getRephraseAttackByEmail,
    insertRephraseAttack,
    deleteRephraseAttackSpecific,
////////////////////////////////////////////////////
    getPersonalityList,
    getIntensivityAllBatches,
    getTimeToTweetsAllBatches,
    getTimeToLikesAllBatches,
    getTimeToRetweetsAllBatches,
    getTimeToCommentsAllBatches
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
    } = require("../models/twitterClassModels");


///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.get("/twitterClass/getTimeToTweets", async function (req, res) {
  try {
    const result = await getTimeToTweets();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/twitterClass/getTimeToTweetsAllBatches", async function (req, res) {
  try {
    const result = await getTimeToTweetsAllBatches();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/getTimeToTweetsByEmail", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getTimeToTweetsByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/insertTimeToTweets", async function (req, res) {
  try {
    const { email, loginNameTwitter, hours, minutes } = req.body;
    const result = await insertTimeToTweets(email, loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/deleteTimeToTweets", async function (req, res) {
  try {
    const { loginNameTwitter } = req.body;
    const result = await deleteTimeToTweets(loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/deleteTimeToTweetsSpecific", async function (req, res) {
  try {
    const { loginNameTwitter, hours, minutes } = req.body;
    const result = await deleteTimeToTweetsSpecific(loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/updateTimeToTweetsSpecific", async function (req, res) {
  try {
    const { loginNameTwitter, hours, minutes, updatedHours, updatedMinutes } = req.body;
    const result = await updateTimeToTweetsSpecific(loginNameTwitter, hours, minutes, updatedHours, updatedMinutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.get("/twitterClass/getTimeToLikes", async function (req, res) {
  try {
    const result = await getTimeToLikes();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/twitterClass/getTimeToLikesAllBatches", async function (req, res) {
  try {
    const result = await getTimeToLikesAllBatches();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/getTimeToLikesByEmail", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getTimeToLikesByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/insertTimeToLikes", async function (req, res) {
  try {
    const { email, loginNameTwitter, hours, minutes } = req.body;
    const result = await insertTimeToLikes(email, loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/deleteTimeToLikes", async function (req, res) {
  try {
    const { loginNameTwitter} = req.body;
    const result = await deleteTimeToLikes(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/deleteTimeToLikesSpecific", async function (req, res) {
  try {
    const { loginNameTwitter, hours, minutes } = req.body;
    const result = await deleteTimeToLikesSpecific(loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/updateTimeToLikesSpecific", async function (req, res) {
  try {
    const { loginNameTwitter, hours, minutes, updatedHours, updatedMinutes } = req.body;
    const result = await updateTimeToLikesSpecific(loginNameTwitter, hours, minutes, updatedHours, updatedMinutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.get("/twitterClass/getTimeToRetweets", async function (req, res) {
  try {
    const result = await getTimeToRetweets();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/twitterClass/getTimeToRetweetsAllBatches", async function (req, res) {
  try {
    const result = await getTimeToRetweetsAllBatches();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/getTimeToRetweetsByEmail", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getTimeToRetweetsByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/insertTimeToRetweets", async function (req, res) {
  try {
    const { email, loginNameTwitter, hours, minutes } = req.body;
    const result = await insertTimeToRetweets(email, loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/deleteTimeToRetweets", async function (req, res) {
  try {
    const { loginNameTwitter} = req.body;
    const result = await deleteTimeToRetweets(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/deleteTimeToRetweetsSpecific", async function (req, res) {
  try {
    const { loginNameTwitter, hours, minutes } = req.body;
    const result = await deleteTimeToRetweetsSpecific(loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/updateTimeToRetweetsSpecific", async function (req, res) {
  try {
    const { loginNameTwitter, hours, minutes, updatedHours, updatedMinutes } = req.body;
    const result = await updateTimeToRetweetsSpecific(loginNameTwitter, hours, minutes, updatedHours, updatedMinutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.get("/twitterClass/getTimeToComments", async function (req, res) {
  try {
    const result = await getTimeToComments();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/twitterClass/getTimeToCommentsAllBatches", async function (req, res) {
  try {
    const result = await getTimeToCommentsAllBatches();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/getTimeToCommentsByEmail", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getTimeToCommentsByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/insertTimeToComments", async function (req, res) {
  try {
    const { email, loginNameTwitter, hours, minutes } = req.body;
    const result = await insertTimeToComments(email, loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/deleteTimeToComments", async function (req, res) {
  try {
    const { loginNameTwitter} = req.body;
    const result = await deleteTimeToComments(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/deleteTimeToCommentsSpecific", async function (req, res) {
  try {
    const { loginNameTwitter, hours, minutes } = req.body;
    const result = await deleteTimeToCommentsSpecific(loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/updateTimeToCommentsSpecific", async function (req, res) {
  try {
    const { loginNameTwitter, hours, minutes, updatedHours, updatedMinutes } = req.body;
    const result = await updateTimeToCommentsSpecific(loginNameTwitter, hours, minutes, updatedHours, updatedMinutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/twitterClass/getIsAutomated", async function (req, res) {
  try {
    const { loginNameTwitter } = req.body;
    const result = await getIsAutomated(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/UpdateIsAutomated", async function (req, res) {
  try {
    const {loginNameTwitter, isAutomated } = req.body;
    const result = await updateIsAutomated(loginNameTwitter, isAutomated);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/twitterClass/getTweetsIntensivity", async function (req, res) {
  try {
    const { loginNameTwitter } = req.body;
    const result = await getTweetsIntensivity(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/updateTweetsIntensivity", async function (req, res) {
  try {
    const {loginNameTwitter, intensivity } = req.body;
    const result = await updateTweetsIntensivity(loginNameTwitter, intensivity);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/twitterClass/getLikesIntensivity", async function (req, res) {
  try {
    const { loginNameTwitter } = req.body;
    const result = await getLikesIntensivity(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/updateLikesIntensivity", async function (req, res) {
  try {
    const {loginNameTwitter, intensivity } = req.body;
    const result = await updateLikesIntensivity(loginNameTwitter, intensivity);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/twitterClass/getRetweetsIntensivity", async function (req, res) {
  try {
    const { loginNameTwitter } = req.body;
    const result = await getRetweetsIntensivity(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/updateRetweetsIntensivity", async function (req, res) {
  try {
    const {loginNameTwitter, intensivity } = req.body;
    const result = await updateRetweetsIntensivity(loginNameTwitter, intensivity);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/twitterClass/getCommentsIntensivity", async function (req, res) {
  try {
    const { loginNameTwitter } = req.body;
    const result = await getCommentsIntensivity(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/updateCommentsIntensivity", async function (req, res) {
  try {
    const {loginNameTwitter, intensivity } = req.body;
    const result = await updateCommentsIntensivity(loginNameTwitter, intensivity);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/twitterClass/getPersonality", async function (req, res) {
  try {
    const { loginNameTwitter } = req.body;
    const result = await getPersonality(loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/updatePersonality", async function (req, res) {
  try {
    const {loginNameTwitter, personality } = req.body;
    const result = await updatePersonality(loginNameTwitter, personality);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.get("/twitterClass/getIntensivity", async function (req, res) {
  try {
    const result = await getIntensivity();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/twitterClass/getIntensivityAllBatches", async function (req, res) {
  try {
    const result = await getIntensivityAllBatches();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/getIntensivityByEmail", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getIntensivityByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/updateAllIntensivity", async function (req, res) {
  try {
    const { loginNameTwitter, intensivity } = req.body;
    const result = await updateAllIntensivity(loginNameTwitter, intensivity);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/insertIntensivity", async function (req, res) {
  try {
    const { email, loginNameTwitter } = req.body;
    const result = await insertIntensivity(email, loginNameTwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/twitterClass/likes_Attack_By_Username", async function (req, res) {
  try {
    const { loginnametwitter } = req.body;
    const result = await getLikesAttackByUsername(loginnametwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/likes_Attack_By_Email", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getLikesAttackByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/insert_Likes_Attack", async function (req, res) {
  try {
    const { formData } = req.body;
    const result = await insertLikesAttack(formData);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/delete_Likes_Attack_Specific_Time", async function (req, res) {
  try {
    const { loginNameTwitter, hours, minutes } = req.body;
    const result = await deleteLikesAttackSpecific(loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/twitterClass/rephrase_Attack_By_Username", async function (req, res) {
  try {
    const { loginnametwitter } = req.body;
    const result = await getRephraseAttackByUsername(loginnametwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/likes_Attack_By_Email", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getRephraseAttackByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/insert_Rephrase_Attack", async function (req, res) {
  try {
    const { formData } = req.body;
    const result = await insertRephraseAttack(formData);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/delete_Rephrase_Attack_Specific_Time", async function (req, res) {
  try {
    const { loginNameTwitter, hours, minutes } = req.body;
    const result = await deleteRephraseAttackSpecific(loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/twitterClass/retweets_Attack_By_Username", async function (req, res) {
  try {
    const { loginnametwitter } = req.body;
    const result = await getRetweetsAttackByUsername(loginnametwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/retweets_Attack_By_Email", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getRetweetsAttackByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/insert_Retweets_Attack", async function (req, res) {
  try {
    const { formData } = req.body;
    const result = await insertRetweetsAttack(formData);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/delete_Retweets_Attack_Specific_Time", async function (req, res) {
  try {
    const { loginNameTwitter, hours, minutes } = req.body;
    const result = await deleteRetweetsAttackSpecific(loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.post("/twitterClass/comments_Attack_By_Username", async function (req, res) {
  try {
    const { loginnametwitter } = req.body;
    const result = await getCommentsAttackByUsername(loginnametwitter);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/comments_Attack_By_Email", async function (req, res) {
  try {
    const { email } = req.body;
    const result = await getCommentsAttackByEmail(email);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/insert_Comments_Attack", async function (req, res) {
  try {
    const { formData } = req.body;
    const result = await insertCommentsAttack(formData);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/twitterClass/delete_Comments_Attack_Specific_Time", async function (req, res) {
  try {
    const { loginNameTwitter, hours, minutes } = req.body;
    const result = await deleteCommentsAttackSpecific(loginNameTwitter, hours, minutes);
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.get("/twitterClass/personality_List", async function (req, res) {
  try {
    const result = await getPersonalityList();
    return res.json({ success: true, payload: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
module.exports = router;