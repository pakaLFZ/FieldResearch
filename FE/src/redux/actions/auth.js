import { snack_open } from 'actions/snack'

const axios = require('axios')

export const LOGIN_SAVE = 'auth/LOGIN_SAVE'

export function userinfoRequest () {
  return function (dispatch) {
    return axios
      .post('/api/user/userinfo')
      .then(response => {
        if (response.data.code === 0) {
          dispatch(userinfo_save(response.data.data))
        }
      })
      .catch(() => {
      })
      .finally(() => {
      })
  }
}

export function loginRequest (data) {
  return function (dispatch) {
    return axios
      .post('/api/user/login', data)
      .then(response => {
        if (response.data.code === 0) {
          dispatch(snack_open('Login success', 'success'))
          dispatch(userinfo_save(response.data.data))
        } else {
          dispatch(snack_open('Please check your info', 'error'))
        }
      })
      .catch(() => {
      })
      .finally(() => {
      })
  }
}
function userinfo_save (data) {
  return {
    userinfo: data,
    type: LOGIN_SAVE
  }
}
export function emailVerRequest (data) {
  return function (dispatch) {
    return axios
      .post('/api/user/get_email_ver', data)
      .then(response => {
        if (response.data.code === 0) {
          dispatch(snack_open('An Verification Emaill has been sent', 'success'))
        } else {
          dispatch(snack_open('An error occurred. Please check your email', 'error'))
        }
      })
      .catch(() => {
      })
      .finally(() => {
      })
  }
}

export function regRequest (data) {
  return function (dispatch) {
    return axios
      .post('/api/user/reg', data)
      .then(response => {
        if (response.data.code === 0) {
          dispatch(snack_open('Sign up successful', 'success'))
          dispatch(loginRequest(data))
        } else {
          dispatch(snack_open('Please check your info', 'error'))
        }
      })
      .catch(() => {
      })
      .finally(() => {
      })
  }
}

export function logoutRequest () {
  return function (dispatch) {
    return axios
      .post('/api/user/logout')
      .then(response => {
        if (response.data.code === 0) {
          dispatch(snack_open('Sign out successful', 'success'))
          dispatch(userinfo_save(null))
        } else {
          dispatch(snack_open('Please check your info', 'error'))
        }
      })
      .catch(() => {
      })
      .finally(() => {
      })
  }
}
