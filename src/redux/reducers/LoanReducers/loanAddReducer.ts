import {  LoanAddActions, LoanState, LOAN_ADD } from '../../../types'

const loanAddReducer = (
  state: LoanState = { loans: [] },
  action: LoanAddActions
): LoanState => {
  switch (action.type) {
  case LOAN_ADD:
    return {
      ...state,
      loans: [...state.loans, action.payload.loans]
    }
  default:
    return state
  }
}
export default loanAddReducer
