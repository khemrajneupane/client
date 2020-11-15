import { Dispatch } from 'react'
import axios from 'axios'

import { BookAddActions, Books, BOOKS_ADD } from '../../../types'
import bookServices from '../../../services/bookServices'
import bookList from './bookGetAllAction'

//Book Add
function addBook(book: Books): BookAddActions {
  return {
    type: BOOKS_ADD,
    payload: {
        book,
    },
  }
}

const bookAdd = async (book: Books, dispatch: Dispatch<any>) => {
  try {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    let user = null
    if(loggedUserJSON){
        user = JSON.parse(loggedUserJSON)
    }
    console.log('bookAdd reducer action call ', user)
    const createBook = await bookServices.create( book, user.token)  

    dispatch(addBook(createBook))
    bookList(dispatch)
  } catch (error) {
    console.log(error)
  }
}

export default bookAdd
