import React from "react"
import { useNavigate } from 'react-router-dom';

import { Configuration, OpenAIApi } from "openai";


//Chatgpt setup
const OPENAI_API_KEY ="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";

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default function Workout() {

    return (
        <div>
            <p>Workout Page</p>
        </div>
    );
}