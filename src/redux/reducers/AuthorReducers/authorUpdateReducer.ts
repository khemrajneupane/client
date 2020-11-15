import { AuthorState, AuthorUpdateActions, AUTHOR_UPDATE } from '../../../types'
const authorUpdateReducer = (
  state: AuthorState = { authors: [] },
  action: AuthorUpdateActions
): AuthorState => {
  switch (action.type) {
  case AUTHOR_UPDATE:
    const { author } = action.payload
    return {
      ...state,
      authors: [...state.authors, author],
    }
  default:
    return state
  }
}
export default authorUpdateReducer
