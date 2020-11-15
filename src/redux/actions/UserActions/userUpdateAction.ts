import { Dispatch } from 'react'

import { UserId, Users, USERS_UPDATE, UserUpdateActions } from '../../../types'
import bookList from '../BookActions/bookGetAllAction'
import userServices from '../../../services/userServices'
import userList from '../UserActions/userGetAllAction'

//Book Add
function updateUser(users: Users): UserUpdateActions {
  return {
    type: USERS_UPDATE,
    payload: {
        users
    },
  }
}

const userUpdate = async (users: Users, id: UserId, dispatch: Dispatch<any>) => {
  try {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    let user = null
    if(loggedUserJSON){
      user = JSON.parse(loggedUserJSON)
    }
    const updateThisUser = await userServices.update( users, id, user.token)  

    dispatch(updateUser(updateThisUser))
    userList(dispatch)
    bookList(dispatch)
    
  } catch (error) {
    if(error.name === 'TypeError'){
      alert('You must be logged in to perform this action')
    }
  }
}

export default userUpdate