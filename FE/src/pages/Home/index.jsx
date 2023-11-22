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

import Block2 from './block2'
import styles from './index.less'


export default withRouter(Page)
function Page(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div classname={styles.maincontainer}>
            {/* Block one */}
            <div className={styles.block1}>
                <div className={styles.block1content}>
                    <p className={styles.title1}>FieldResearcher</p>
                    <p className={styles.title2}>Your partner in decision making in front of challenges from lacking of information</p>

                    <div className={styles.buttonGroup}>
                        <Button
                            size="large"
                            variant="outlined"
                            href={'/#Block2'}
                        >
                            Get Started
                        </Button>
                    </div>

                </div>
            </div>

            {/* Block one */}
            <div className={styles.block2}>
                <Block2/>
            </div>
        </div>

    )
}
