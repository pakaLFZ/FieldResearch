import { snack_open } from 'actions/snack'

const axios = require('axios')

export const SEARCH_OPEN = 'link/SEARCH_OPEN'
export const SEARCH_CLOSE = 'link/SEARCH_CLOSE'
export const CONVERSATION_SAVE = 'link/CONVERSATION_SAVE'

// dispatch(searchClose())


export function conversation_request(messages) {
  return function (dispatch) {
    const openaiApiKey = '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'; // Replace with your actual OpenAI API key

    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: messages,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openaiApiKey}`,
    };

    dispatch(searchClose())
    dispatch(conversation_save(messages))

    return axios
      .post('https://api.openai.com/v1/chat/completions', requestData, { headers })
      .then(response => {
        // Handle the response as needed
        const data_ = response.data.choices[0].message;
        const data = [
          ...messages,
          data_
        ]
        dispatch(conversation_save(data))
        dispatch(searchOpen())
      })
      .catch(error => {
        // Handle errors
        dispatch(searchOpen())
        console.error('Error calling OpenAI API:', error);
      });
  };
}

function conversation_save(data) {
  return {
    data: data,
    type: CONVERSATION_SAVE
  }
}

export function searchOpen () {
  return {
    type: SEARCH_OPEN
  }
}
export function searchClose () {
  return {
    type: SEARCH_CLOSE
  }
}