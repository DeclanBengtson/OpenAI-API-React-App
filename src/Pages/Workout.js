import React from "react"
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

//Chatgpt setup
const OPENAI_API_KEY ="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";

export default function Workout() {
        const arrayItems = [{
            name: "Q&A",
            id: "q&a",
            description: "Answer questions based on existing knowledge",
            option: {
              model: "text-davinci-003",
              temperature: 0,
              max_tokens: 100,
              top_p: 1,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,
            }}
      ]
      const configuration = new Configuration({
          apiKey: OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const [result, setResult] = useState("");
        const [input, setInput] = useState("");
       
        const doStuff = async () => {
          console.log(arrayItems[0].option);
          console.log(input);
          let object = { ...arrayItems[0].option, prompt: input };
  
      
          const response = await openai.createCompletion(object);
          console.log(response);
  
          setResult(response.data.choices[0].text);
        };
      return (
          <div>
              <h2>Workout Plan Page</h2>
              <p>Input a prompt in the box below describing the parameters of the exercise plan you would like to develop.</p>
              <textarea className="text-area" cols={100} rows={10} onChange={(e) => setInput(e.target.value)}
  ></textarea>
              <p></p>
              <button type="button" class="btn btn-dark" onClick={doStuff}>Generate Exercise Plan</button>
              <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
          </div>
      );
}
