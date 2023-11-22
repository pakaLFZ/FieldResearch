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
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import TopNavBar from 'component/TopNavBar/index'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Stack from '@mui/material/Stack'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import SendIcon from '@mui/icons-material/Send'

import styles from './index.less'
import Alert from 'component/SnackBar'

import {
  loginRequest,
  emailVerRequest,
  regRequest
} from 'actions/auth'

import { snack_open } from 'actions/snack'

export default withRouter(Page)
function Page (props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    userinfo
  } = useSelector(state => state.auth)

  const [showPassword_L, setShowPassword_L] = useState(false)
  const [showPassword_S, setShowPassword_S] = useState(false)

  const [email_L, setEmail_L] = useState(null)
  const [password_L, setPassword_L] = useState(null)
  const [email_S, setEmail_S] = useState('')
  const [password_S, setPassword_S] = useState(null)
  const [password_r_S, setPassword_r_S] = useState(null)
  const [code, setCode] = useState(null)

  function login () {
    const data = {
      email: email_L,
      password: password_L
    }
    dispatch(loginRequest(data))
  }
  function VerifyEmail () {
    const data = {
      email: email_S
    }
    if (!email_S || email_S.length < 3) {
      dispatch(snack_open('Please enter a valid email address', 'error'))
    } else {
      dispatch(emailVerRequest(data))
    }
  }
  function signup () {
    if (password_S != password_r_S) {
      dispatch(snack_open("'Confimed password is not consistent with password. Please check them again", 'warning '))
    } else {
      const data = {
        email: email_S,
        password: password_S,
        code: code
      }
      dispatch(regRequest(data))
    }
  }

  if (userinfo != null) {
    console.log('A')
    history.push('/credits')
  }

  const passwordIcon_L = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => setShowPassword_L(!showPassword_L)}
        edge="end"
      >
        {
          showPassword_L
            ? <VisibilityOff />
            : <Visibility />
        }

      </IconButton>
    </InputAdornment>
  )
  const passwordIcon_S = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => setShowPassword_S(!showPassword_S)}
        edge="end"
      >
        {
          showPassword_S
            ? <VisibilityOff />
            : <Visibility />
        }

      </IconButton>
    </InputAdornment>
  )
  const emailVer = (
    <InputAdornment position="end">
      <Tooltip title="Send Verification Email">
        <IconButton
          aria-label="send verification email"
          edge="end"
          onClick={() => VerifyEmail()}
        >
          <SendIcon/>
        </IconButton>
      </Tooltip>
    </InputAdornment>
  )
  return (
    <div>
      <TopNavBar/>
      <div className={styles.content}>
        <div className={styles.panel}>
          <Stack spacing={2}>
            <h3>Login</h3>
            <FormControl sx={{ m: 1, width: '450px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={'text'}
                label="Email"
                value={email_L}
                onChange={(e) => setEmail_L(e.target.value)}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: '450px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword_L ? 'text' : 'password'}
                endAdornment={passwordIcon_L}
                label="Password"
                value={password_L}
                onChange={(e) => setPassword_L(e.target.value)}
              />
            </FormControl>
            <Button
              variant="outlined"
              size="large"
              onClick={() => login()}
            >
                            Login
            </Button>
          </Stack>

        </div>

        <div className={styles.panel}>
          <Stack spacing={2}>
            <h3>Sign up</h3>

            <FormControl sx={{ m: 1, width: '450px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={'text'}
                label="Email"
                endAdornment={emailVer}
                value={email_S}
                onChange={(e) => setEmail_S(e.target.value)}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: '450px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Verification Code</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={'text'}
                label="Email"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: '450px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword_S ? 'text' : 'password'}
                endAdornment={passwordIcon_S}
                label="Password"
                value={password_S}
                onChange={(e) => setPassword_S(e.target.value)}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: '450px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword_S ? 'text' : 'password'}
                endAdornment={passwordIcon_S}
                label="Password"
                value={password_r_S}
                onChange={(e) => setPassword_r_S(e.target.value)}
              />
            </FormControl>

            <Button
              variant="outlined"
              size="large"
              onClick={() => signup()}
            >
                            Sign Up
            </Button>
          </Stack>
        </div>

      </div>

      <Alert/>
    </div>
  )
}
