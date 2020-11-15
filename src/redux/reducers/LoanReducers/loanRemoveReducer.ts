import {  LoanRemoveActions, LoanState, LOAN_REMOVE } from '../../../types'

const loanRemoveReducer = (
  state: LoanState = { loans: [] },
  action: LoanRemoveActions
): LoanState => {
  switch (action.type) {
  case LOAN_REMOVE:
    const remainingLoans = state.loans.filter((value) => value.id !== action.payload.loan.id)
    return {
     ...state, loans: remainingLoans
    }
  default:
    return state
  }
}
export default loanRemoveReducer