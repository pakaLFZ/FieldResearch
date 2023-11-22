import {
  OPEN,
  CLOSE
} from 'actions/snack'

const initState = {
  snack_open: false,
  snack_severity: 'success',
  snack_msg: null
}

export default function reducer (state = initState, action) {
  switch (action.type) {
    case CLOSE:
      return {
        ...state,
        snack_open: false
      }
    case OPEN:
      return {
        ...state,
        snack_open: true,
        snack_severity: action.severity,
        snack_msg: action.msg
      }

    default:
      return state
  }
}
