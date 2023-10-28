import { OpenAI } from "langchain/llms/openai";
import 'dotenv/config';

const llm = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.7,
    maxTokens: 100,
    
});

async function main(prompt: string) {
    const result = await llm.predict(prompt);

    // Print the generated text
    console.log(result);
}

// Set your OpenAI GPT-3 API key in your .env file
// OPENAI_API_KEY=your-api-key

// Example prompt
const prompt = "Translate the following English text to French: 'Hello, how are you?'";

// Call the main function with the prompt
main(prompt);
