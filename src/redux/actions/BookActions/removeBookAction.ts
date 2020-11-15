import { Dispatch } from 'react'
import axios from 'axios'

import { AuthorId, BookId, BookRemoveActions, Books, BOOK_REMOVE } from '../../../types'
import bookServices from '../../../services/bookServices'
import bookList from './bookGetAllAction'

//Book Add
function removeBook(book: Books): BookRemoveActions {
  return {
    type: BOOK_REMOVE,
    payload: {
      book
    },
  }
}

const bookRemove = async (book: Books, dispatch: Dispatch<any>) => {
  try {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    let user = null
    if(loggedUserJSON){
      user = JSON.parse(loggedUserJSON)
    }
    const updateThisBook = await bookServices.remove( book.id, user.token)  
    dispatch(removeBook(updateThisBook))
    bookList(dispatch)
    
  } catch (error) {
    if(error.name === 'TypeError'){
      alert('You must be logged in to perform this action')
    }
  }
}

export default bookRemove