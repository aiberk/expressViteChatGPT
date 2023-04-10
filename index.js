// const express = require("express");
// const { Configuration, OpenAIApi } = require("openai");
// // const openai = require("openai");

// const app = express();
// const port = 3000;

// // Set up the OpenAI API key
// openai.apiKey = "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";

// // Serve static files from the "public" directory
// app.use(express.static("public"));

// // Define a route for generating responses
// app.get("/api/generate", async (req, res) => {
//   const { prompt } = req.query;

//   try {
//     const completions = await openai.Completion.create({
//       engine: "davinci",
//       prompt: prompt,
//       max_tokens: 1000,
//       n: 1,
//       stop: "stop",
//     });

//     const message = completions.choices[0].text.trim();
//     res.json({ message });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error generating response from OpenAI" });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "How are you today?",
  });
  console.log(completion.data.choices[0].text);
}

runCompletion();
