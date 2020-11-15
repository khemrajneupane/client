
import { 
    
  LoggerState,
  LoggingAction,
    USER_LOGIN
  } from '../../../types'
  
  const loginOutReducer = (state: LoggerState = {loggedUser: []},
    action: LoggingAction
    ) => {
    switch (action.type) {
      case USER_LOGIN:
        const {usrInfo} = action.payload
        return {...state, LoggerState: usrInfo }
      default:
        return state
    }
  }
  export default loginOutReducer 
