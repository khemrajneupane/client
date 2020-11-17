import { LoanState, LoanFetchActions, LOAN_FETCH } from '../../../types'
const loanFetchReducer = (
  state: LoanState = { loans: [] },
  action: LoanFetchActions
): LoanState => {
  switch (action.type) {
  case LOAN_FETCH:
    return { ...state, loans: action.payload.loans }
  default:
    return state
  }
}
export default loanFetchReducer
