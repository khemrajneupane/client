import { Dispatch } from "react"
import { USER_LOGOUT } from "../../../types"

// logout
export const logOut = (dispatch: Dispatch<any>) => {
    try{
    const user = localStorage.removeItem('loggedUser')
    const username = localStorage.removeItem('username')
    const userId = localStorage.removeItem('userId')

    console.log('loggedOutUser ', user, username, userId)
    dispatch({ type: USER_LOGOUT })
    }catch(error){
        console.log(error)
    }
  }
