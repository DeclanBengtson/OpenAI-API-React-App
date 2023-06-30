import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";


//Chatgpt setup
const OPENAI_API_KEY ="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";

export default function MealPlan() {
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
            <p>Meal Plan Page</p>
            <textarea className="text-area" cols={100} rows={10} onChange={(e) => setInput(e.target.value)}
></textarea>
            <p></p>
            <button className="button" onClick={doStuff}>Generate Meal Plan</button>
            <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
        </div>
    );
}
