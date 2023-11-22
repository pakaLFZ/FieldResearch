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
import TextField from '@mui/material/TextField';

import styles from './questionBoard.less'

export default function QuestionBoard(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    const [ questionNo, setQuestionNo ] = useState(0)

return(
    <div>
        <Question1 
            questionNo={questionNo}
            setQuestionNo={(e)=>setQuestionNo(e)}
            response=()
        />
    </div>
)
}

function Question1(props){
    return (
        <div>
            <div className={styles.card}>
                <p className={styles.cardTitle}>What specific industry or market segment are you interested in researching?</p>
                <TextField 
                    className={styles.textField}
                    variant="outlined" 
                    multiline
                    rows={5}
                    placeholder="Enter your response"
                />

                {/* Actions */}
                <p/>
                <div className={styles.actions}>
                    <Button>
                        Previous
                    </Button>
                    <Button>
                        Next
                    </Button>

                </div>
            </div>
        </div>
    )
}
