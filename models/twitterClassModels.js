const pool = require("../database/config.js");

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

async function getTimeToTweets(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT * FROM timeToTweets WHERE loginNameTwitter= '${loginNameTwitter}' ORDER BY loginnametwitter, hours, minutes ASC;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function getTimeToTweetsByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM timeToTweets WHERE email= '${email}' ORDER BY loginnametwitter, hours, minutes ASC;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function insertTimeToTweets(email, loginNameTwitter, hours, minutes) {
  try{
    const sqlQuery = `INSERT INTO timeToTweets (email, loginNameTwitter, hours, minutes) VALUES ('${email}', '${loginNameTwitter}', ${hours}, ${minutes});`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function deleteTimeToTweets(loginNameTwitter) {
  try{
    const sqlQuery = `DELETE FROM timeToTweets WHERE loginNameTwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function deleteTimeToTweetsSpecific(loginNameTwitter, hours, minutes) {
  try{
    const sqlQuery = `DELETE FROM timeToTweets WHERE loginNameTwitter='${loginNameTwitter}' AND hours=${hours} AND minutes=${minutes};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updateTimeToTweetsSpecific(loginNameTwitter, hours, minutes, updatedHours, updatedMinutes) {
  try{
    const sqlQuery = `UPDATE timeToTweets SET hours=${updatedHours}, minutes=${updatedMinutes} WHERE loginnametwitter='${loginNameTwitter}' AND hours=${hours} AND minutes=${minutes};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getTimeToLikes(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT * FROM timeToLikes WHERE loginNameTwitter= '${loginNameTwitter}' ORDER BY loginnametwitter, hours, minutes ASC;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function getTimeToLikesByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM timeToLikes WHERE email= '${email}' ORDER BY loginnametwitter, hours, minutes ASC;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function insertTimeToLikes(email, loginNameTwitter, hours, minutes) {
  try{
    const sqlQuery = `INSERT INTO timeToLikes (email, loginNameTwitter, hours, minutes) VALUES ('${email}', '${loginNameTwitter}', ${hours}, ${minutes});`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function deleteTimeToLikes(loginNameTwitter) {
  try{
    const sqlQuery = `DELETE FROM timeToLikes WHERE loginNameTwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function deleteTimeToLikesSpecific(loginNameTwitter, hours, minutes) {
  try{
    const sqlQuery = `DELETE FROM timeToLikes WHERE loginNameTwitter='${loginNameTwitter}' AND hours=${hours} AND minutes=${minutes};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updateTimeToLikesSpecific(loginNameTwitter, hours, minutes, updatedHours, updatedMinutes) {
  try{
    const sqlQuery = `UPDATE timeToLikes SET hours=${updatedHours}, minutes=${updatedMinutes} WHERE loginnametwitter='${loginNameTwitter}' AND hours=${hours} AND minutes=${minutes};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getTimeToRetweets(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT * FROM timeToRetweets WHERE loginNameTwitter= '${loginNameTwitter}' ORDER BY loginnametwitter, hours, minutes ASC;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function getTimeToRetweetsByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM timeToRetweets WHERE email= '${email}' ORDER BY loginnametwitter, hours, minutes ASC;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function insertTimeToRetweets(email, loginNameTwitter, hours, minutes) {
  try{
    const sqlQuery = `INSERT INTO timeToRetweets (email, loginNameTwitter, hours, minutes) VALUES ('${email}', '${loginNameTwitter}', ${hours}, ${minutes});`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function deleteTimeToRetweets(loginNameTwitter) {
  try{
    const sqlQuery = `DELETE FROM timeToRetweets WHERE loginNameTwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function deleteTimeToRetweetsSpecific(loginNameTwitter, hours, minutes) {
  try{
    const sqlQuery = `DELETE FROM timeToRetweets WHERE loginNameTwitter='${loginNameTwitter}' AND hours=${hours} AND minutes=${minutes};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updateTimeToRetweetsSpecific(loginNameTwitter, hours, minutes, updatedHours, updatedMinutes) {
  try{
    const sqlQuery = `UPDATE timeToRetweets SET hours=${updatedHours}, minutes=${updatedMinutes} WHERE loginnametwitter='${loginNameTwitter}' AND hours=${hours} AND minutes=${minutes};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getTimeToComments(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT * FROM timeToComments WHERE loginNameTwitter= '${loginNameTwitter}' ORDER BY loginnametwitter, hours, minutes ASC;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function getTimeToCommentsByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM timeToComments WHERE email= '${email}' ORDER BY loginnametwitter, hours, minutes ASC;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function insertTimeToComments(email, loginNameTwitter, hours, minutes) {
  try{
    const sqlQuery = `INSERT INTO timeToComments (email, loginNameTwitter, hours, minutes) VALUES ('${email}', '${loginNameTwitter}', ${hours}, ${minutes});`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function deleteTimeToComments(loginNameTwitter) {
  try{
    const sqlQuery = `DELETE FROM timeToComments WHERE loginNameTwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function deleteTimeToCommentsSpecific(loginNameTwitter, hours, minutes) {
  try{
    const sqlQuery = `DELETE FROM timeToComments WHERE loginNameTwitter='${loginNameTwitter}' AND hours=${hours} AND minutes=${minutes};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updateTimeToCommentsSpecific(loginNameTwitter, hours, minutes, updatedHours, updatedMinutes) {
  try{
    const sqlQuery = `UPDATE timeToComments SET hours=${updatedHours}, minutes=${updatedMinutes} WHERE loginnametwitter='${loginNameTwitter}' AND hours=${hours} AND minutes=${minutes};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getIsAutomated(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT isautomated FROM loginData where WHERE loginnametwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updateIsAutomated(loginNameTwitter, isAutomated) {
  try{
    const sqlQuery = `UPDATE loginData SET isautomated='${isAutomated}' WHERE loginnametwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getTweetsIntensivity(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT tweetsintensivity FROM intensivity where WHERE loginnametwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updateTweetsIntensivity(loginNameTwitter, intensivity) {
  try{
    const sqlQuery = `UPDATE intensivity SET tweetsintensivity=${intensivity} WHERE loginnametwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getLikesIntensivity(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT likesintensivity FROM intensivity where WHERE loginnametwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updateLikesIntensivity(loginNameTwitter, intensivity) {
  try{
    const sqlQuery = `UPDATE intensivity SET likesintensivity=${intensivity} WHERE loginnametwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getRetweetsIntensivity(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT retweetsintensivity FROM intensivity where WHERE loginnametwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updateRetweetsIntensivity(loginNameTwitter, intensivity) {
  try{
    const sqlQuery = `UPDATE intensivity SET retweetsintensivity=${intensivity} WHERE loginnametwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getCommentsIntensivity(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT commentsintensivity FROM intensivity where WHERE loginnametwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updateCommentsIntensivity(loginNameTwitter, intensivity) {
  try{
    const sqlQuery = `UPDATE intensivity SET commentsintensivity=${intensivity} WHERE loginnametwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getPersonality(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT personality FROM loginData where WHERE loginnametwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updatePersonality(loginNameTwitter, personality) {
  try{
    const sqlQuery = `UPDATE loginData SET personality='${personality}' WHERE loginnametwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getIntensivity() {
  try{
    const sqlQuery = `SELECT * FROM intensivity ORDER BY id ASC;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function getIntensivityByUsername(loginnametwitter) {
  try{
    const sqlQuery = `SELECT * FROM intensivity WHERE loginnametwitter='${loginnametwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links[0];
  }catch(error){
    console.error(error);
  }
}
async function getIntensivityByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM intensivity WHERE email= '${email}' ORDER BY id ASC;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function insertIntensivity(email, loginNameTwitter) {
  try{
    const sqlQuery = `INSERT INTO intensivity (email, loginNameTwitter) VALUES ('${email}', '${loginNameTwitter}');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updateAllIntensivity(loginNameTwitter, intensivity) {
  try{
    const sqlQuery = `UPDATE intensivity SET tweetsintensivity=${intensivity}, likesintensivity=${intensivity}, retweetsintensivity=${intensivity}, commentsintensivity=${intensivity} WHERE loginNameTwitter='${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

async function getLikesAttackByUsername(loginnametwitter) {
  try{
    const sqlQuery = `SELECT * FROM likesAttack WHERE loginnametwitter= '${loginnametwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}

async function getLikesAttackByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM likesAttack WHERE email= '${email}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}

async function insertLikesAttack(formData) {
  try{
    const values = formData.map(obj => `('${obj.email}', '${obj.loginnametwitter}', '${obj.url}', ${obj.hours}, ${obj.minutes})`);
    const valuesString = values.join(', ');
    const sqlQuery = `INSERT INTO likesAttack (email, loginNameTwitter, url, hours, minutes) VALUES ${valuesString};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}

async function deleteLikesAttackSpecific(loginNameTwitter, hours, minutes) {
  try{
    const sqlQuery = `DELETE FROM likesAttack WHERE loginNameTwitter='${loginNameTwitter}' AND hours=${hours} AND minutes=${minutes};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

async function getRetweetsAttackByUsername(loginnametwitter) {
  try{
    const sqlQuery = `SELECT * FROM RetweetsAttack WHERE loginnametwitter= '${loginnametwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}

async function getRetweetsAttackByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM RetweetsAttack WHERE email= '${email}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}

async function insertRetweetsAttack(formData) {
  try{
    const values = formData.map(obj => `('${obj.email}', '${obj.loginnametwitter}', '${obj.url}', ${obj.hours}, ${obj.minutes})`);
    const valuesString = values.join(', ');
    const sqlQuery = `INSERT INTO RetweetsAttack (email, loginNameTwitter, url, hours, minutes) VALUES ${valuesString};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}

async function deleteRetweetsAttackSpecific(loginNameTwitter, hours, minutes) {
  try{
    const sqlQuery = `DELETE FROM RetweetsAttack WHERE loginNameTwitter='${loginNameTwitter}' AND hours=${hours} AND minutes=${minutes};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

async function getCommentsAttackByUsername(loginnametwitter) {
  try{
    const sqlQuery = `SELECT * FROM CommentsAttack WHERE loginnametwitter= '${loginnametwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}

async function getCommentsAttackByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM CommentsAttack WHERE email= '${email}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}

async function insertCommentsAttack(formData) {
  try{
    const values = formData.map(obj => `('${obj.email}', '${obj.loginnametwitter}', '${obj.url}', ${obj.hours}, ${obj.minutes})`);
    const valuesString = values.join(', ');
    const sqlQuery = `INSERT INTO CommentsAttack (email, loginNameTwitter, url, hours, minutes) VALUES ${valuesString};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}

async function deleteCommentsAttackSpecific(loginNameTwitter, hours, minutes) {
  try{
    const sqlQuery = `DELETE FROM CommentsAttack WHERE loginNameTwitter='${loginNameTwitter}' AND hours=${hours} AND minutes=${minutes};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

async function getRephraseAttackByUsername(loginnametwitter) {
  try{
    const sqlQuery = `SELECT * FROM RephraseAttack WHERE loginnametwitter= '${loginnametwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}

async function getRephraseAttackByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM RephraseAttack WHERE email= '${email}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}

async function insertRephraseAttack(formData) {
  try{
    const values = formData.map(obj => `('${obj.email}', '${obj.loginnametwitter}', '${obj.url}', ${obj.hours}, ${obj.minutes})`);
    const valuesString = values.join(', ');
    const sqlQuery = `INSERT INTO RephraseAttack (email, loginNameTwitter, url, hours, minutes) VALUES ${valuesString};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}

async function deleteRephraseAttackSpecific(loginNameTwitter, hours, minutes) {
  try{
    const sqlQuery = `DELETE FROM RephraseAttack WHERE loginNameTwitter='${loginNameTwitter}' AND hours=${hours} AND minutes=${minutes};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

async function getPersonalityList() {
  try{
    const sqlQuery = `SELECT * FROM personalityList;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

module.exports = {
                getTimeToTweets,
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
            getIntensivityByUsername,
            getIntensivityByEmail,
            insertIntensivity,
            updateAllIntensivity,
            ////////////////////////////////////////////////
            getLikesAttackByUsername,
            getLikesAttackByEmail,
            insertLikesAttack,
            deleteLikesAttackSpecific,
            ////////////////////////////////////////////////////
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
            ////////////////////////////////////////////////////
            ////////////////////////////////////////////////////
            ////////////////////////////////////////////////////
            ////////////////////////////////////////////////////
            ////////////////////////////////////////////////////

          };
