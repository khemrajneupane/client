import { AuthorAddActions, AuthorState, AUTHOR_ADD } from '../../../types'
const authorAddReducer = (
  state: AuthorState = { authors: [] },
  action: AuthorAddActions
): AuthorState => {
  switch (action.type) {
  case AUTHOR_ADD:
    const { author } = action.payload
    return {
      ...state,
      authors: [...state.authors, author],
    }
  default:
    return state
  }
}
export default authorAddReducer
