import {
  LOGIN_SAVE
} from 'actions/auth'

const initState = {
  userinfo: null
}

export default function reducer (state = initState, action) {
  switch (action.type) {
    case LOGIN_SAVE:
      console.log(action)
      return {
        ...initState,
        userinfo: action.userinfo
      }

    default:
      return state
  }
}
