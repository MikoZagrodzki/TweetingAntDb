const getChatGpt = require('./fetchChatGpt');

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
    IMPORTANT: do not use any emojis.
    Please take the original tweet provided and rewrite it to deliver the same message with a blend of critical insight and motivational encouragement. The new tweet should challenge the reader to think differently and inspire them to take action towards personal growth and self-investment.
    Original Tweet: ${tweet}
    Guidelines for Rewrite:
    • Use a tone that combines a critical edge with a edginess.
    • Keep the message clear, direct, and suitable for social media's succinct communication style.
    • Make sure the rewritten tweet is something that would stand out in a social media feed and spark thoughtful consideration
    • please provide tweet without using any amojis
    • remember to use relatively simple language
    • DO NOT EVER WRITE HASHTAGS
    
    `;
    const prompt3 = `
    IMPORTANT: do not use any emojis.
    Please rephrase this tweet to convey the same message in a different style:
    Original Tweet: ${tweet}
    Desired Style: More formal and insightful, emphasizing the slow and steady nature of true success in cryptocurrency and cautioning against the overhyped, speculative nature of some high-profile figures in the industry.
    • please provide tweet without using any amojis
    • remember to use relatively simple language
    • DO NOT EVER WRITE HASHTAGS
    `;
    const prompt4 = `
    IMPORTANT: do not use any emojis.
    Please rephrase this tweet to convey the same message in a different style:
    Original Tweet: ${tweet}
    Desired Style: More formal and insightful, emphasizing the slow and steady nature of true success in cryptocurrency and cautioning against the overhyped, speculative nature of some high-profile figures in the industry.
    • please provide tweet without using any amojis
    • remember to use relatively simple language
    • DO NOT EVER WRITE HASHTAGS
    `;
    const prompt5 = `
    IMPORTANT: do not use any emojis.
    Please rephrase this tweet to convey the same message in a different style:
    Original Tweet: ${tweet}
    Desired Style: More informal and laid-back, a bit controvesial, make a good point. 
    • please provide tweet without using any amojis
    • remember to use relatively simple language
    • DO NOT EVER WRITE HASHTAGS
    `;
    const prompt6 = `
    IMPORTANT: do not use any emojis.
    Please rephrase this tweet to convey the same message in a different style:
    Original Tweet: ${tweet}
    Desired Style: Reflecting the tone of a tech-savvy 20-year-old university student from the USA, passionate about current affairs. The rephrased tweet should be engaging, infused with youthful energy, and use contemporary slang or casual language typical of a young adult deeply involved in technology and social media.
    • Please provide the tweet without using any emojis.
    • Remember to use language that resonates with young, tech-oriented audiences.
    • DO NOT EVER WRITE HASHTAGS
`;
    const prompt7 = `
    IMPORTANT: do not use any emojis.
    Please rephrase this tweet to convey the same message in a different style:
    Original Tweet: ${tweet}
    Desired Style: The rephrased tweet should emulate the voice of someone who is intellectually critical and exceptionally smart, yet paradoxically nonchalant and often indulges in leisure activities like smoking a joint or playing PS5 games. This style should convey a sense of a genius who is, in a way, squandering their potential in laid-back pursuits. The language should be sharp and insightful, yet casually interspersed with a relaxed, almost indifferent tone that reflects their leisurely lifestyle.
    • Please provide the tweet without using any emojis.
    • Remember to use sophisticated yet relaxed language.
    • DO NOT EVER WRITE HASHTAGS
    `;
    const prompt8 = `
    IMPORTANT: do not use any emojis.
    Please rephrase this tweet to convey the same message in a different style:
    Original Tweet: ${tweet}
    Desired Style: The rephrased tweet should mirror the voice of a worldly traveler, someone who has spent a significant part of their life exploring various cultures and places. This individual possesses a wisdom that is both ancient and relevant to our times, and exudes a kind, loving disposition towards the world. The language should be rich with cultural references and imbued with a deep understanding and appreciation of global diversity, exuding warmth and compassion.
    • Please provide the tweet without using any emojis.
    • Remember to use language that reflects a well-traveled, wise, and kind perspective.
    • DO NOT EVER WRITE HASHTAGS
    `;

    function getRandomPrompt() {
      const prompts = [prompt1, prompt2, prompt3, prompt4, prompt5, prompt6, prompt7, prompt8, ];
      const randomIndex = Math.floor(Math.random() * prompts.length);
      return prompts[randomIndex];
    }

    switch (personality) {
      case 'prompt1':
        return prompt1;
      case 'prompt2':
        return prompt2;
      case 'prompt3':
        return prompt3;
      case 'prompt4':
        return prompt4;
      case 'prompt5':
        return prompt5;
      case 'prompt6':
        return prompt7;
      case 'prompt7':
        return prompt7;
      case 'prompt8':
        return prompt8;

      default:
        return getRandomPrompt();
    }
  } catch (error) {
    console.error('personalityPromptSetter', error.message, `TWEET CONTEXT: ${tweetContext}`);
  }
}

const tweetPromptEnginered = async (personality, tweet) => {
  const randomNumber = Math.floor(Math.random() * 99) + 1;
  try {
    const prompt = await personalityPromptSetter(personality, tweet);
    let gptResponse = await getChatGpt(prompt);

    while (gptResponse?.split('').length > 280) {
      gptResponse = await getChatGpt(`Rewrite the tweet by making it shorter: ${gptResponse}`);
    }

    if (!gptResponse) {
      return undefined;
    }
    if (randomNumber < 98) {
      let gptResponseArray = gptResponse.split(' ');
      for (let i = gptResponseArray.length - 1; i >= 0; i--) {
        if (gptResponseArray[i].startsWith('#')) {
          gptResponseArray.splice(i, 1);
        } else {
          gptResponse = gptResponseArray.join(' ');
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
    console.error('tweetPromptEnginered', error.message, `TWEET: ${tweet}`);
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
