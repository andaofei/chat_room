/**
 * Created by 23535 on 2018/8/12.
 */
import axios from 'axios'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
        msg: '',
        user: '',
        type: ''
}

// reducer
export function user(state=initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
                return{...state, msg: '', isAuth: true, ...action.payload}
        case ERROR_MSG:
                return{...state, msg: action.msg, isAuth: false}
        default:
                return state

    }
}

function registerSuccess(data) {
    return{type: REGISTER_SUCCESS, payload: data}
}

function errorMsg(msg) {
    return {msg, type: ERROR_MSG}
}

export function regisger({user, pwd, repeatpwd, type}) {
    console.log({user, pwd, repeatpwd, type})
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须填入')
    }
    if (pwd!==repeatpwd) {
        return errorMsg('密码和确认密码不一致')
    }
    return dispatch => {
        axios.post('/user/register', {user, pwd, type})
            .then((res) => {
                if (res.status === 200&& res.data.code === 0) {
                    dispatch(registerSuccess({user, pwd, type}))
                }
                else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}