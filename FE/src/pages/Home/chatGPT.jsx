import React, {
    useState
} from 'react'

export async function opennaiHandshake(msg) {
    const [response, setResponse] = useState(null);

    const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key

    const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'You are a helpful assistant.',
            },
            {
                role: 'user',
                content: 'Who won the World Series in 2020?',
            },
            {
                role: 'assistant',
                content: 'The Los Angeles Dodgers won the World Series in 2020.',
            },
            {
                role: 'user',
                content: 'Where was it played?',
            },
        ],
    };

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        setResponse(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }





    const response_text = JSON.stringify(response, null, 2);
    console.log("response_text", response_text);
    return response_text
}
