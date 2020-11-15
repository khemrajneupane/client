import {  AuthorState, BookAddActions, BookState, BOOKS_ADD } from '../../../types'

const bookAddReducer = (
  state: BookState = { books: [] },
  action: BookAddActions
): BookState => {
  switch (action.type) {
  case BOOKS_ADD:
    const { book } = action.payload
    console.log("call from bookaddReducer ")
    return {
      ...state,
      books: [...state.books, book],
    }
  default:
    return state
  }
}
export default bookAddReducer
