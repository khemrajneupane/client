import { Dispatch } from 'react'
import axios from 'axios'

import { AuthorId, Books, BookUpdateActions, BOOK_UPDATE } from '../../../types'
import bookServices from '../../../services/bookServices'
import bookList from './bookGetAllAction'

//Book Add
function updateBook(book: Books): BookUpdateActions {
  return {
    type: BOOK_UPDATE,
    payload: {
      book
    },
  }
}

const bookUpdate = async (book: Books, id: AuthorId, dispatch: Dispatch<any>) => {
  try {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    let user = null
    if(loggedUserJSON){
      user = JSON.parse(loggedUserJSON)
    }
    const updateThisBook = await bookServices.update( book, id, user.token)  

    dispatch(updateBook(updateThisBook))
    dispatch(bookList(dispatch))
    
  } catch (error) {
    if(error.name === 'TypeError'){
      alert('You must be logged in to perform this action')
    }
  }
}

export default bookUpdate