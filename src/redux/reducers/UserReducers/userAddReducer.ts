import { UserState, UserAddActions, USER_ADD } from '../../../types'
const userAddReducer = (
  state: UserState = { users: [] },
  action: UserAddActions
): UserState => {
  switch (action.type) {
  case USER_ADD:
    const { user } = action.payload
    return {
      ...state,
      users: [...state.users, user],
    }
  default:
    return state
  }
}
export default userAddReducer
