import { UserFetchActions, UserState, USERS_LIST } from '../../../types'

const userFetchReducer = (
  state: UserState = { users: [] },
  action: UserFetchActions
): UserState => {
  switch (action.type) {
  case USERS_LIST:
    return { ...state, users: action.payload.users }
  default:
    return state
  }
}

export default userFetchReducer
