const pool = require("../database/config.js");
const { insertIntensivity } = require("./twitterClassModels.js");

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getLoginData() {
  try{
    const sqlQuery = `SELECT * FROM loginData;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getLoginDataFromEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM loginData WHERE email='${email}' ORDER BY id ASC;`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function checkLoginData(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT EXISTS(SELECT 1 FROM loginData WHERE loginNameTwitter= '${loginNameTwitter}');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function insertLoginData(email, loginNameTwitter, passwordTwitter) {
  try{
    const sqlQuery = `INSERT INTO loginData (email, loginNameTwitter, passwordTwitter) VALUES ('${email}', '${loginNameTwitter}', '${passwordTwitter}');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const usernameUsedForTweetsMap = (usernames) => {
  return usernames.usercontent;
};
async function getUserNameUsedForTweets(loginNameTwitter, personality) {
  try{
    // const sqlQuery = `SELECT * FROM userContent WHERE loginNameTwitter= '${loginNameTwitter}' AND purpose = 'userNameUsedForTweets';`;
    const sqlQuery = `SELECT * FROM userContent WHERE purpose = 'userNameUsedForTweets' AND (loginNameTwitter= '${loginNameTwitter}' OR personality= '${personality}');`;
    const result = await pool.query(sqlQuery);
    let links = result.rows;
    links = links.map(usernameUsedForTweetsMap);
    return links;
  }catch(error){
    console.error(error)
  }
}
async function getAllUserNameUsedForTweets() {
  try{
    const sqlQuery = `SELECT * FROM userContent WHERE purpose='userNameUsedForTweets';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function getUserNameUsedForTweetsByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM userContent WHERE email= '${email}' AND purpose='userNameUsedForTweets';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function checkUserNameUsedForTweets(loginNameTwitter, username) {
  try{
    const sqlQuery = `SELECT EXISTS(SELECT 1 FROM userContent WHERE loginNameTwitter= '${loginNameTwitter}' AND usercontent='${username}');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function insertUserNameUsedForTweets(formData) {
  try{
    const values = formData.map(obj => `('${obj.email}', '${obj.loginnametwitter}', '${obj.usernameusedfortweets}', 'userNameUsedForTweets')`);
    const valuesString = values.join(', ');
    const sqlQuery = `INSERT INTO userContent (email, loginNameTwitter, userContent, purpose) VALUES ${valuesString};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function deleteUserNameUsedForTweetsSpecific(loginNameTwitter, userNameUsedForTweets) {
  try{
    const sqlQuery = `DELETE FROM userContent WHERE loginNameTwitter= '${loginNameTwitter}' AND userContent='${userNameUsedForTweets}' AND purpose='userNameUsedForTweets';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getRephresedTweets(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT * FROM rephresedTweets WHERE loginNameTwitter= '${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function getRephresedTweetsByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM rephresedTweets WHERE email= '${email}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function checkRephresedTweets(loginNameTwitter, tweetId) {
  try{
    const sqlQuery = `SELECT EXISTS(SELECT 1 FROM rephresedTweets WHERE loginNameTwitter= '${loginNameTwitter}' AND rephresedTweets= '${tweetId}');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function insertRephresedTweets(loginNameTwitter, tweetId) {
  try{
    const sqlQuery = `INSERT INTO rephresedTweets (loginNameTwitter, rephresedTweets) VALUES ('${loginNameTwitter}', '${tweetId}');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getLikedTweets(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT * FROM likedTweets WHERE loginNameTwitter= '${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function getLikedTweetsByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM likedTweets WHERE email= '${email}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function checkLikedTweets(loginNameTwitter, tweetId) {
  try{
    const sqlQuery = `SELECT EXISTS(SELECT 1 FROM likedTweets WHERE loginNameTwitter= '${loginNameTwitter}' AND  likedTweets= '${tweetId}');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function insertLikedTweets(loginNameTwitter, tweetId) {
  try{
    const sqlQuery = `INSERT INTO likedTweets (loginNameTwitter, likedTweets) VALUES ('${loginNameTwitter}', '${tweetId}');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getCommentedTweets(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT * FROM commentedTweets WHERE loginNameTwitter= '${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function getCommentedTweetsByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM commentedTweets WHERE email= '${email}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function checkCommentedTweets(loginNameTwitter, tweetId) {
  try{
    const sqlQuery = `SELECT EXISTS(SELECT 1 FROM commentedTweets WHERE loginNameTwitter= '${loginNameTwitter}' AND commentedTweets= '${tweetId}');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function insertCommentedTweets(loginNameTwitter, tweetId) {
  try{
    const sqlQuery = `INSERT INTO commentedTweets (loginNameTwitter, commentedTweets) VALUES ('${loginNameTwitter}', '${tweetId}');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function getRetweetedTweets(loginNameTwitter) {
  try{
    const sqlQuery = `SELECT * FROM retweetedTweets WHERE loginNameTwitter= '${loginNameTwitter}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function getRetweetedTweetsByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM retweetedTweets WHERE email= '${email}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function checkRetweetedTweets(loginNameTwitter, tweetId) {
  try{
    const sqlQuery = `SELECT EXISTS(SELECT 1 FROM retweetedTweets WHERE loginNameTwitter= '${loginNameTwitter}' AND retweetedTweets= '${tweetId}');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function insertRetweetedTweets(loginNameTwitter, tweetId) {
  try{
    const sqlQuery = `INSERT INTO retweetedTweets (loginNameTwitter, retweetedTweets) VALUES ('${loginNameTwitter}', '${tweetId}');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function userContentMap(usernames){
  return usernames.usercontent
}
async function getUserContent(loginNameTwitter, personality) {
  try{
    // const sqlQuery = `SELECT * FROM userContent WHERE loginNameTwitter= '${loginNameTwitter}' AND purpose='userContent';`;
    const sqlQuery = `SELECT * FROM userContent WHERE purpose = 'userContent' AND (loginNameTwitter = '${loginNameTwitter}' OR personality = '${personality}');`;

    const result = await pool.query(sqlQuery);
    let links = result.rows;
    links = links.map(userContentMap);
    return links;
  }catch(error){
    console.error(error)
  }
}
async function getAllUserContent() {
  try{
    const sqlQuery = `SELECT * FROM userContent;`;
    const result = await pool.query(sqlQuery);
    let links = result.rows;
    links = links.map(userContentMap);
    return links;
  }catch(error){
    console.error(error)
  }
}
async function getUserContentByEmail(email) {
  try{
    const sqlQuery = `SELECT * FROM userContent WHERE email= '${email}' AND purpose='userContent';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function checkUserContent(loginNameTwitter, userContent) {
  try{
    const sqlQuery = `SELECT EXISTS(SELECT 1 FROM userContent WHERE loginNameTwitter= '${loginNameTwitter}' AND userContent= '${userContent}' AND purpose='userContent');`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function insertUserContent(formData) {
  try{
    const values = formData.map(obj => `('${obj.email}', '${obj.loginnametwitter}', '${obj.usernameusedfortweets}', 'userContent')`);
    const valuesString = values.join(', ');
    const sqlQuery = `INSERT INTO userContent (email, loginNameTwitter, userContent, purpose) VALUES ${valuesString};`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function deleteUserContentSpecific(loginNameTwitter, userContent) {
  try{
    const sqlQuery = `DELETE FROM userContent WHERE loginNameTwitter= '${loginNameTwitter}' AND userContent= '${userContent}' AND purpose='userContent';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error)
  }
}
async function getUserContentIsActive(username) {
  try{
    const sqlQuery = `SELECT isactive From userContent WHERE usercontent='${username}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updateUserContentIsActive(username, isActive) {
  try{
    const sqlQuery = `UPDATE userContent SET isactive=${isActive} WHERE usercontent='${username}';`;
    const result = await pool.query(sqlQuery);
    const links = result.rows;
    return links;
  }catch(error){
    console.error(error);
  }
}
async function updateUserContentLastTimeFetched(username, lastTimeFetched) {
  try{
    const sqlQuery = `UPDATE userContent SET lasttimefetched='${lastTimeFetched}' WHERE usercontent='${username}';`;
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

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

module.exports = {
  getLoginData,
  getLoginDataFromEmail,
  checkLoginData,
  insertLoginData,
////////////////////////////////////////////////////
  getUserNameUsedForTweets,
  getAllUserNameUsedForTweets,
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
  getUserContentIsActive,
  updateUserContentIsActive,
  updateUserContentLastTimeFetched,
////////////////////////////////////////////////////

////////////////////////////////////////////////////

};
