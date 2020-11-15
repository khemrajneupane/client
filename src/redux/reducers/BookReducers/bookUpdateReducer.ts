import {  BookState, BookUpdateActions, BOOK_UPDATE } from '../../../types'

const bookUpdateReducer = (
  state: BookState = { books: [] },
  action: BookUpdateActions
): BookState => {
  switch (action.type) {
  case BOOK_UPDATE:
    const { book } = action.payload
    return {
      ...state,
      books: [...state.books, book]
    }
  default:
    return state
  }
}
export default bookUpdateReducer