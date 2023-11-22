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


import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'

import SendIcon from '@mui/icons-material/Send'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom'

import styles from './chat.less'

import {
    conversation_request
  } from 'actions/link'

export default function Chat(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const {
        conversations,
        search
    } = useSelector(state => state.link)

    const [ userInput, setUserInput ] = useState("")

    function conversationRefresh(){
        dispatch(conversation_request(
            [
                ...conversations,
                {
                    role: "user",
                    content: userInput
                }
            ]
        ))
    }
    return (
        <div className={styles.chatContent}>
            <div className={styles.chatField}>
                {
                    conversations.map(
                        (item, id) => (
                            <AssistantBubble msg={item} key={id}/>
                        )
                    )
                }
            </div>
            <p/>

            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                elevation={6}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Ask anything"
                    inputProps={{ 'aria-label': 'Ask anything' }}
                    autoFocus={false}
                    size="large"
                    content={userInput}
                    onChange={e=>setUserInput(e.target.value)}
                />


                <Tooltip
                    title={'Send'}
                    placement="top"
                >
                    <span>
                        <IconButton
                            type="button"
                            sx={{ p: '10px' }}
                            aria-label="search"
                            disabled={!search}
                            color="primary"
                            onClick={()=>conversationRefresh()}
                        >
                            <SendIcon />

                        </IconButton>
                    </span>
                </Tooltip>


            </Paper >
        </div>
    )
}


function AssistantBubble(props) {
    if (props.msg.role == "user"){
        return (
            <div className={styles.messageLine}>
                <p className={styles.msgTitle_user} >
                    You
                </p>
                <p className={styles.msg}>{props.msg.content}</p>
    
            </div>
        )
    } else if((props.msg.role == "assistant")) {
        return (
            <div className={styles.messageLine}>
                <p className={styles.msgTitle_assistant} >
                    FieldResearch
                </p>
                <p className={styles.msg}>{props.msg.content}</p>
    
            </div>
        )
    } else {
        return <></>
    }
   
}


