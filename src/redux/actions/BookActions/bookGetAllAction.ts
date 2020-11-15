import { Dispatch } from 'react'
import { BookActions, Books, BOOKS_LIST } from '../../../types'
import bookService from '../../../services/bookServices'
function fetchBooks(books: Books[]): BookActions {
  return {
    type: BOOKS_LIST,
    payload: {
      books,
    },
  }
}
const bookList = async (dispatch: Dispatch<any>) => {
  try{
    const books = await bookService.getAll()
    dispatch(fetchBooks(books))
  }catch(error){
    console.log(error)
  }
}
export default bookList
