import { UserState, USERS_UPDATE, UserUpdateActions } from '../../../types'

const userUpdateReducer = (
  state: UserState = { users: [] },
  action: UserUpdateActions
): UserState => {
  switch (action.type) {
  case USERS_UPDATE:
    const { users } = action.payload
    return {
      ...state,
      users: [...state.users, users]
    }
  default:
    return state
  }
}
export default userUpdateReducer