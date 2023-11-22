const axios = require('axios')

export const OPEN = 'snack/OPEN'
export const CLOSE = 'snack/CLOSE'

export function snack_open (msg, type) {
  return dispatch => {
    dispatch(snack_save(msg, type))
  }
}
function snack_save (msg, type) {
  return {
    type: OPEN,
    msg: msg,
    severity: type
  }
}

export function snack_close () {
  return function (dispatch) {
    dispatch(snack_remove())
  }
}
function snack_remove () {
  return {
    type: CLOSE
  }
}
