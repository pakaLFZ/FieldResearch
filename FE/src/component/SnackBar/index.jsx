import React, {
  useState
} from 'react'

import {
  withRouter,
  useHistory
} from 'react-router-dom'

import {
  useDispatch, // 发送请求
  useSelector // 获得数据
} from 'react-redux' // 发送请求的

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

import {
  snack_close
} from 'actions/snack'

export default function Alert (props) {
  const dispatch = useDispatch()

  const {
    snack_open,
    snack_severity,
    snack_msg
  } = useSelector(state => state.snack)

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={snack_open}
      autoHideDuration={3000}
      onClose={() => dispatch(snack_close())}
    >
      <MuiAlert
        elevation={6}
        onClose={() => dispatch(snack_close())}
        severity={snack_severity}
        sx={{ width: '100%' }}
      >
        {snack_msg}
      </MuiAlert>
    </Snackbar>
  )
}
