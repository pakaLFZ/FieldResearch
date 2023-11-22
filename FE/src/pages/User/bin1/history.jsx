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

import styles from './credits.less'
import TopNavBar from 'component/TopNavBar/index'
// import logo from './img/Baidu.svg.png'

import {
  userinfoRequest
} from 'actions/auth'

export default withRouter(Page)
function Page(props) {
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

  return (
    <div >
      <TopNavBar />

      <div className={styles.baidu}>

        <div>
          <a href='https://news.baidu.com/' className={styles.topbar}>新闻</a>
          <a href='https://www.hao123.com/?src=from_pc_logon' className={styles.topbar}>hao123</a>
          <a href='https://map.baidu.com/' className={styles.topbar}>地图</a>
          <a href='https://tieba.baidu.com/index.html' className={styles.topbar}>贴吧</a>
          <a href='https://haokan.baidu.com/?sfrom=baidu-top' className={styles.topbar}>视频</a>
          <a href='http://image.baidu.com/' className={styles.topbar}>图片</a>
          <a href='https://pan.baidu.com/?from=1026962h' className={styles.topbar}>网盘</a>
          <a href='http://www.baidu.com/more/' className={styles.topbar}>更多</a>
        </div>

        <div>
          {/* <img className={styles.logo} src={logo}></img> */}
          
          <ul>
            <li className={styles.searchbar}></li>
            <li className={styles}>百度一下</li>
          </ul>

        </div>

      </div>

      <div className={styles.footer}>
        <a href='' className={styles.fele}>关于百度</a>
        <a href='' className={styles.fele}>About Baidu</a>
        <a href='' className={styles.fele}>使用百度前必读</a>
        <a href='' className={styles.fele}>帮助中心</a>
        <a href='' className={styles.fele}>企业推广</a>
        <a href='' className={styles.fele}>京公网安备11000002000001号</a>
        <a href='' className={styles.fele}>京ICP证030173号</a>
        <a className={styles.fele}>互联网新闻信息服务许可证11220180008</a>
        <a className={styles.fele}>网络文化经营许可证： 京网文〔2023〕1034-029号</a>
        <a href='' className={styles.fele}>信息网络传播视听节目许可证 0110516</a>
        <a className={styles.fele}>互联网宗教信息服务许可证编号：京（2022）0000043</a>
      </div>

    </div>
  )
}
