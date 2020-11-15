import { Dispatch } from 'react'

import { UserFetchActions, Users, USERS_LIST } from '../../../types'
import userServices from '../../../services/userServices'

// Users Fetch
function fetchUsers(users: Users[]): UserFetchActions {
  return {
    type: USERS_LIST,
    payload: {
      users,
    },
  }
}
const userList = async (dispatch: Dispatch<any>) => {
 try{
    const allUsers = await userServices.getAll()
    dispatch(fetchUsers(allUsers))
  }catch(error){
    console.log(error)
  }
}

export default userList
