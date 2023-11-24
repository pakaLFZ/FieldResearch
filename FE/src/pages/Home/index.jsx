import React, {
    useState, useRef 
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
import ButtonGroup from '@mui/material/ButtonGroup';
import Tooltip from '@mui/material/Tooltip';

import Block2 from './block2'
import styles from './index.less'
import Alert from 'component/SnackBar'
import { snack_open } from 'actions/snack'



export default withRouter(Page)
function Page(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    const scrollToBottom = () => {
        window.scrollTo({
          left: 0,
          top: document.body.scrollHeight,
          behavior: 'smooth', // Optional: defines the transition animation
        });
    }    
    return (
        <div classname={styles.maincontainer}>
            <ButtonGroup 
                variant="text" 
                className={styles.signup}
            >
                 <Tooltip title="Internal Maintenance">
                    <Button>Login</Button>

                 </Tooltip>
                 <Tooltip title="Internal Maintenance">
                    <Button>Signup</Button>
                 </Tooltip>

            </ButtonGroup>
            {/* Block one */}
            <div className={styles.block1}>
                    
                <div className={styles.block1content}>
                    <p className={styles.title1}>FieldsResearch</p>
                    <p className={styles.title2}>Your partner in decision making in front of challenges from lacking of information</p>

                    <div className={styles.buttonGroup}>
                        <Button
                            size="large"
                            variant="outlined"
                            onClick={()=>scrollToBottom()}

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
