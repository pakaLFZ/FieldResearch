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
  
  import Card from '@mui/material/Card'
  import CardActions from '@mui/material/CardActions'
  import CardContent from '@mui/material/CardContent'
  
  import styles from './history.less'
  import TopNavBar from 'component/TopNavBar/index'
  
  import {
    userinfoRequest
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
    const dataList = [
      1, 2, 3, 4, 5
    ]
  
    return (
      <div >
        <TopNavBar/>

        <div className={styles.topic}>
            <h1>User's Input history</h1>
        </div>
        <>
          {
            dataList.map(
              (item, index)=> (
                <p> id: {item}</p>
              )
            )
          }
        </>

        <div className={styles.entry}>
            <h1>Topic</h1>
            <p>{"userinfo"}</p>
            <ul>
                <li><a href="" className={styles.view}>View</a></li>
                <li><a href="" className={styles.del}>Delete</a></li>
            </ul>
            
        </div>
      </div>
    )
  
  }
  