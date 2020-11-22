import { Dispatch } from 'react'
import { USER_LOGOUT } from '../../../types'

// logout
export const logOut = (dispatch: Dispatch<any>) => {
  try {
    localStorage.removeItem('loggedUser')
    localStorage.removeItem('username')
    localStorage.removeItem('userId')
    dispatch({ type: USER_LOGOUT })
  } catch (error) {
    console.log(error)
  }
}
