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


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'


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

    const [userInput, setUserInput] = useState("")
    const [finished, setFinished] = useState(false)
    const [ popout, setPopout] = useState(false)

    function conversationRefresh() {
        setUserInput("")
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

    if (conversations[conversations.length - 1].content.includes("##END##") && !finished) {
        console.log("finished");
        setFinished(true)
        setPopout(true)
    }
    return (
        <div className={styles.chatContent}>
            <div className={styles.chatField}>
                {
                    conversations.map(
                        (item, id) => (
                            <AssistantBubble msg={item} key={id} />
                        )
                    )
                }
                {
                    finished ?
                        <p className={styles.congrats}>
                            <span>
                                Congratulation! You've just identified a new market research topic.
                            </span>
                            <br />
                            <span>
                                Go to the dashboard to begin your research and refine your topic further.
                            </span>
                        </p>
                        : <></>
                }


                {
                    finished ?
                        <Button
                            size="large"
                            variant="outlined"
                            className={styles.endButton}
                            onClick={()=>setPopout(true)}
                        >
                            Start Market Research
                        </Button>
                        :
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                            className={styles.userInput}
                            elevation={6}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Enter your response"
                                inputProps={{ 'aria-label': 'Enter your response' }}
                                autoFocus={false}
                                disabled={finished}
                                size="large"
                                onChange={e => setUserInput(e.target.value)}
                                value={userInput}
                            />


                            <Tooltip
                                title={
                                    search ?
                                        "Send" :
                                        "Loading"
                                }
                                placement="top"
                            >
                                <span>
                                    <IconButton
                                        type="button"
                                        sx={{ p: '10px' }}
                                        aria-label="search"
                                        disabled={!search || finished}
                                        color="primary"
                                        onClick={() => conversationRefresh()}
                                    >
                                        <SendIcon />

                                    </IconButton>
                                </span>
                            </Tooltip>
                        </Paper >
                }
            </div>

            <Dialog
                open={popout}
                onClose={() => setPopout(false)}
            >
                <DialogTitle>
                    {"Congratulation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Internal maintainance in progress. Sorry for the inconvenience.
                    </DialogContentText>
                    <br/>
                    <DialogContentText>
                        If you are considering joining us please reach out at <a href={""}>fl822@ic.ac.uk</a>.
                    </DialogContentText>
                    <DialogContentText>
                        We'll be happy to discuss further.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setPopout(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}


function AssistantBubble(props) {
    const content_ = props.msg.content;
    const content = content_.split('\n')
    function Multiline() {
        if (content) {
            return (
                <>
                    {
                        content.map(
                            (line, index) => (
                                <p key={index}>{line.replace(/##END##/g, '')}</p>
                            )
                        )

                    }
                </>
            )
        } else {
            return <></>
        }

    }
    if (props.msg.role == "user") {
        return (
            <div className={styles.messageLine}>
                <p className={styles.msgTitle_user} >
                    You
                </p>

                <p className={styles.msg}>
                    <Multiline />
                </p>

            </div>
        )
    } else if (props.msg.role == "assistant") {
        return (
            <div className={styles.messageLine}>
                <p className={styles.msgTitle_assistant} >
                    FieldResearch
                </p>
                <p className={styles.msg}>
                    <Multiline />
                </p>
            </div>
        )
    } else {
        return <></>
    }
}


