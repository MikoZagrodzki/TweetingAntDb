const getChatGpt = require("./fetchChatGpt");

async function personalityPromptSetter(personality, tweet) {
  try {
    // const tweetContext = await getChatGpt(
    //   `Analyze this tweet and extract general context of it: ${tweet}. Provide the link if needed.`
    // );

    
    const prompt1 = `
    IMPORTANT: do not use any emojis. Please rewrite the tweet below while maintaining its core message but altering the tone and style but remember to use relatively simple language. Aim for a rewrite that captures attention and emphasizes the key point with a fresh perspective. Keep it concise and make it resonate on a personal level for the reader. 
    
    Original Tweet: ${tweet}
    
    Rules for Rewrite:
    • Infuse a tone that is informal humorous.
    • Highlight the main message with more engaging language.
    • Use vivid imagery or comparisons to make the point more relatable.
    • Ensure the tweet is short, punchy, and fits within the character limit for social media.
    • Avoid technical jargon, and make it accessible to a general audience.
    • DO NOT EVER WRITE HASHTAGS
    • please provide tweet without using any amojis
    
    `;
    const prompt2 = `
    Please take the original tweet provided and rewrite it to deliver the same message with a blend of critical insight and motivational encouragement. The new tweet should challenge the reader to think differently and inspire them to take action towards personal growth and self-investment.
    Original Tweet: ${tweet}
    Guidelines for Rewrite:
    • Use a tone that combines a critical edge with a motivational push.
    • Maintain the central message but present it in a way that questions common behaviors and prompts self-reflection.
    • Encourage the reader to prioritize personal development and self-investment with compelling language.
    • Keep the message clear, direct, and suitable for social media's succinct communication style.
    • Make sure the rewritten tweet is something that would stand out in a social media feed and spark thoughtful consideration
    • please provide tweet without using any amojis
    • remember to use relatively simple language
    
    `;
    const prompt3 = `
    Please rephrase this tweet to convey the same message in a different style:
    Original Tweet: ${tweet}
    Desired Style: More formal and insightful, emphasizing the slow and steady nature of true success in cryptocurrency and cautioning against the overhyped, speculative nature of some high-profile figures in the industry.
    • please provide tweet without using any amojis
    • remember to use relatively simple language
    `;
     
    

    function getRandomPrompt() {
      const prompts = [prompt1, prompt2, prompt3];
      const randomIndex = Math.floor(Math.random() * prompts.length);
      return prompts[randomIndex];
    }
    
    switch (personality) {
      case "prompt1":
        return prompt1;
      case "prompt2":
        return prompt2;
      case "prompt3":
        return prompt3;

      default:
        return getRandomPrompt();
    }
  } catch (error) {
    console.error(
      "personalityPromptSetter",
      error.message,
      `TWEET CONTEXT: ${tweetContext}`
    );
  }
}

const tweetPromptEnginered = async (personality, tweet) => {
  const randomNumber = Math.floor(Math.random() * 99) + 1;
  try {
    const prompt = await personalityPromptSetter(personality, tweet);
    let gptResponse = await getChatGpt(prompt);

    while (gptResponse?.split("").length > 280) {
      gptResponse = await getChatGpt(
        `Rewrite the tweet by making it shorter: ${gptResponse}`
      );
    }

    if (!gptResponse) {
      return undefined;
    }
    if (randomNumber < 98) {
      let gptResponseArray = gptResponse.split(" ");
      for (let i = gptResponseArray.length - 1; i >= 0; i--) {
        if (gptResponseArray[i].startsWith("#")) {
          gptResponseArray.splice(i, 1);
        } else {
          gptResponse = gptResponseArray.join(" ");
          break;
        }
      }
    }

    if (gptResponse && gptResponse.startsWith('"')) {
      gptResponse = gptResponse.substring(1);
    }

    if (gptResponse && gptResponse.endsWith('"')) {
      gptResponse = gptResponse.slice(0, -1);
    }

    return gptResponse;
  } catch (error) {
    console.error("tweetPromptEnginered", error.message, `TWEET: ${tweet}`);
  }
};

module.exports = { tweetPromptEnginered };

// * Personality: Adapt the following information aspects of the user's persona:
//   * Type of Persona: The Inspirational Motivator
//   * Topics: Personal growth, motivational quotes, success stories
//   * Tone and Style: Positive, uplifting, empathetic
//   * Unique Characteristics: Shares personal anecdotes, often uses hashtags like #MotivationMonday, encourages followers

// * Personality: Adapt the following information aspects of the user's persona:
//   * Type of Persona: The Industry Expert
//   * Topics: Industry trends, professional advice, case studies
//   * Tone and Style: Professional, knowledgeable, credible
//   * Unique Characteristics: Offers insider insights, cites recent data, networks with other industry experts.