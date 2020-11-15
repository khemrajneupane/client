import { Dispatch } from 'react'
import axios from 'axios'

import authorServices from '../../../services/authorServices'
import { AuthorAddActions, Authors, AUTHOR_ADD, USER_LOGOUT } from '../../../types'
import authorList from './authorGetAllAction'

//Author Add
function addAuthor(author: Authors): AuthorAddActions {
  return {
    type: AUTHOR_ADD,
    payload: {
        author,
    },
  }
}

const authorAdd = async (author: Authors, dispatch: Dispatch<any>) => {
  try {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    let user = null
    if(loggedUserJSON){
        user = JSON.parse(loggedUserJSON)
    }
    const createAuthor = await authorServices.create(author, user.token)
    dispatch(addAuthor(createAuthor))
    authorList(dispatch)
  } catch (error) {
    if(error.name === 'TypeError'){
      alert('You must be logged in to perform this action')
    }
  }
}

export default authorAdd
