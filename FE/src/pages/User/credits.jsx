import React, {
  useState
} from 'react'

import {
  useDispatch, // 发送请求
  useSelector // 获得数据
} from 'react-redux' // 发送请求的

import {
  withRouter,
  useHistory
} from 'react-router-dom'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import styles from './credits.less'
import TopNavBar from 'component/TopNavBar/index'

import {
  userinfoRequest,
  logoutRequest
} from 'actions/auth'

export default withRouter(Page)
function Page (props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    userinfo
  } = useSelector(state => state.auth)

  const [f, sf] = useState(true)
  if (f) {
    dispatch(userinfoRequest())
    sf(false)
  }
  if (userinfo == null) {
    console.log('A')
    history.push('/auth')
  }

  return (
    <div >
      <TopNavBar/>
      <div className={styles.content}>
        <h2>Credits</h2>
        <div className={styles.table}>
          <TableContainer component={Paper} >
            <Table sx={{ width: '100%' }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Account info</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                                            Email
                  </TableCell>
                  <TableCell align="right">
                    {
                      userinfo
                        ? userinfo.email
                        : null
                    }
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                                            Sponsorship
                  </TableCell>
                  <TableCell align="right">
                    {
                      userinfo
                        ? userinfo.vip
                          ? 'Yes'
                          : 'False'
                        : null
                    }
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                                            Credits
                  </TableCell>
                  <TableCell align="right">
                    {
                      userinfo
                        ? userinfo.credits
                        : null
                    }
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <br/>
        <Button
          variant="outlined"
          onClick={() => dispatch(logoutRequest())}
        >
                    Sign out
        </Button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Instruction/>
      </div>

    </div>
  )
}

function Instruction () {
  return (
    <div>
      <h2>What are Sponsorships and Credits?</h2>
      <p>Sponsorship is the recognision for your help to maintain this project.</p>
      <p>Credits is the number of times you can use our service</p>
    </div>
  )
}
