import { Dispatch } from 'react'
import { Loan, LoanFetchActions, LOAN_FETCH } from '../../../types'
import loanServices from '../../../services/loanServices'
function fetchLoans(loans: Loan[]): LoanFetchActions {
  return {
    type: LOAN_FETCH,
    payload: {
      loans,
    },
  }
}
const loanList = async (dispatch: Dispatch<any>) => {
  try {
    const loans = await loanServices.getAll()
    dispatch(fetchLoans(loans))
  } catch (error) {
    console.log(error)
  }
}
export default loanList
