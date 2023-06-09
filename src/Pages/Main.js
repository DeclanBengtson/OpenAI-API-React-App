import React from "react"
//ChatGpt import
import { Configuration, OpenAIApi } from "openai";

const OPENAI_API_KEY ="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";

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);



const url = "https://api.openai.com/v1/images/generations";

function Main() {
  async function image(){
  const response = await openai.createImage({
    prompt: "A cute baby sea otter",
    n: 2,
    size: "1024x1024",
  });
  console.log(response);
}
    return (
      <div className="container">
        <h1>ChatGPT App</h1>
        <p>response</p>
        </div>
    )
}
export default Main;