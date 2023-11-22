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
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import HistoryIcon from '@mui/icons-material/History'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import ArticleIcon from '@mui/icons-material/Article'

import styles from './index.less'

import {
  userinfoRequest
} from 'actions/auth'

export default withRouter(TopNavBar)
function TopNavBar (props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    userinfo
  } = useSelector(state => state.auth)

  const [f, sf] = useState(true)
  const [open, setOpen] = useState(false)

  if (f) {
    dispatch(userinfoRequest())
    sf(false)
  }

  const listItem = [
    {
      text: 'History',
      icon: <HistoryIcon/>,
      link: '/history'
    },
    {
      text: 'Credits',
      icon: <CardGiftcardIcon/>,
      link: '/credits'
    }
  ]
  const actions = (
    <Box
      sx={{ width: 300 }}
      role="presentation"
    >
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
                      Menu
          </ListSubheader>
        }
      >
        <ListItem disablePadding >
          <ListItemButton
            onClick={() => history.push('/workbench')}
          >
            <ListItemIcon>
              <ArticleIcon/>
            </ListItemIcon>
            <ListItemText
              primary={'Work Bench'}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        {
          listItem.map((item, index) => (
            <ListItem disablePadding >
              <ListItemButton onClick={() => history.push(item.link)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                />
              </ListItemButton>
            </ListItem>

          ))
        }
      </List>
    </Box>
  )

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ 
            flexGrow: 1,
            userSelect: "none",
            cursor: "pointer"
          }}
          onClick={() => history.push('/')}
        >
                Project Link
        </Typography>
        {
          userinfo
            ? <Button
              color="inherit"
              onClick={() => setOpen(true)}
            >
              {userinfo.email}
            </Button>
            : <Button
              color="inherit"
              onClick={() => history.push('/auth')}
            >
                    Login
            </Button>
        }

      </Toolbar>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        {actions}
      </Drawer>
    </AppBar>
  )
}
