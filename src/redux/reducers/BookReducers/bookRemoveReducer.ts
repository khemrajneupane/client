import {  BookRemoveActions, BookState, BookUpdateActions, BOOK_REMOVE, BOOK_UPDATE } from '../../../types'

const bookRemoveReducer = (
  state: BookState = { books: [] },
  action: BookRemoveActions
): BookState => {
  switch (action.type) {
  case BOOK_REMOVE:
    const remainingBooks = state.books.filter((value) => value.id !== action.payload.book.id)
    return {
     ...state, books: remainingBooks
    }
  default:
    return state
  }
}
export default bookRemoveReducer