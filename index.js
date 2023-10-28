"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = require("langchain/llms/openai");
require("dotenv/config");
const llm = new openai_1.OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.7,
    maxTokens: 100,
});
function main(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield llm.predict(prompt);
        // Print the generated text
        console.log(result);
    });
}
// Set your OpenAI GPT-3 API key in your .env file
// OPENAI_API_KEY=your-api-key
// Example prompt
const prompt = "Translate the following English text to French: 'Hello, how are you?'";
// Call the main function with the prompt
main(prompt);
