require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);
const getChatGpt = async (prompt) => {
  try {
    let chatGptCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      // prompt: `
      //           ${prompt}
      //         `,
      messages: [{ role: "user", content: prompt }],
      max_tokens: 70,
      temperature: 0.3,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      // n: 2,
      // best_of:3,
      // stop: ["\end end end"]
      // suffix: "Generating completed."
    });
    chatGptCompletion = chatGptCompletion.data.choices[0].message.content;
    // console.log(chatGptCompletion);
    return chatGptCompletion;
  } catch (error) {
    console.error("getChatGpt", error.message);
  }
};

module.exports = getChatGpt;