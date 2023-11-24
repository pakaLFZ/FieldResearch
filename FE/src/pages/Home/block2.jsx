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

import Chat from './chat'
import styles from './block2.less'


export default withRouter(Block2)
function Block2(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
       <div className={styles.block2}>
         <div className={styles.block2content}>
            <p className={styles.title1}>Start With A Topic</p>
            <p className={styles.title2}>Let us help you to identify a specific topic that describe the needs of yours</p>

            <div className={styles.chatSection}>
                <Chat />

            </div>
            <p/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p className={styles.copyrights}>FieldResearch</p>
            <br/>
            <br/>

        </div>
       </div>
    )
}

// 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