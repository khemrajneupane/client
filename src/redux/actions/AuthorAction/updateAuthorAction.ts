import { Dispatch } from 'react'
import axios from 'axios'

import authorServices from '../../../services/authorServices'
import { AuthorId, Authors, AuthorUpdateActions, AUTHOR_UPDATE} from '../../../types'
import authorList from './authorGetAllAction'
import bookList from '../BookActions/bookGetAllAction'

//Author Add
function updateAuthor(author: Authors): AuthorUpdateActions {
  return {
    type: AUTHOR_UPDATE,
    payload: {
        author
    },
  }
}

const authorUpdate = async (author: Authors,id: AuthorId, dispatch: Dispatch<any>) => {
  try {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    let user = null
    if(loggedUserJSON){
        user = JSON.parse(loggedUserJSON)
    }
    const updateThisAuthor = await authorServices.update(author, id, user.token)
    dispatch(updateAuthor(updateThisAuthor))
    authorList(dispatch)
    bookList(dispatch)
  } catch (error) {
    if(error.name === 'TypeError'){
      alert('You must be logged in to perform this action')
    }
  }
}

export default authorUpdate
