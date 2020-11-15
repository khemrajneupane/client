import { Dispatch } from 'react'
import axios from 'axios'
import { UserAddActions, Users, USER_ADD } from '../../../types'
import userServices from '../../../services/userServices'
import userList from './userGetAllAction'

//Users Add
function addUser(user: Users): UserAddActions {
  return {
    type: USER_ADD,
    payload: {
      user,
    },
  }
}

const userAdd = async (user: Users, dispatch: Dispatch<any>) => {
  try {
    const createUser = await userServices.create(user)
    dispatch(addUser(createUser))
    userList(dispatch)
  } catch (error) {
    console.log(error)
  }
}

export default userAdd
