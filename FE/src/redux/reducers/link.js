import {
  CONVERSATION_SAVE,
  SEARCH_OPEN,
  SEARCH_CLOSE,
} from 'actions/link'

const history = [
  {
    role: "system",
    content: ""
  },
  {
    role: "assistant",
    content: "What specific industry or market segment are you interested in researching? "
  },
]

const initialState = {
  search: true,
  conversations: history
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case CONVERSATION_SAVE:
      return {
        ...state,
        conversations: action.data
      }
    case SEARCH_OPEN:
      return {
        ...state,
        search: true
      }
    case SEARCH_CLOSE:
      return {
        ...state,
        search: false
      }
  
    default:
      return state
  }
}
