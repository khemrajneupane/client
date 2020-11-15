import { BookState, BookActions, BOOKS_LIST } from '../../../types'
const bookFetchReducer = (
  state: BookState = { books: [] },
  action: BookActions
): BookState => {
  switch (action.type) {
  case BOOKS_LIST:
    return { ...state, books: action.payload.books }
  default:
    return state
  }
}
export default bookFetchReducer
