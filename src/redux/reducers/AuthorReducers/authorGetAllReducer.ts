import { AuthorFetchActions, AuthorState, AUTHORS_LIST } from '../../../types'

const authorFetchReducer = (
  state: AuthorState = { authors: [] },
  action: AuthorFetchActions
): AuthorState => {
  switch (action.type) {
  case AUTHORS_LIST:
    return { ...state, authors: action.payload.authors }
  default:
    return state
  }
}
export default authorFetchReducer
