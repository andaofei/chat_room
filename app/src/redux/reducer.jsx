import {combineReducers} from 'redux';
// import {counter} from './counter';
// import {auth} from '../auth/Auth.redux.jsx'
import {user} from './user.redux'
import {chatuser} from './chartuser'
import { chat } from './chat'
// export default combineReducers({user, counter, auth})
export default combineReducers({user, chatuser, chat})
