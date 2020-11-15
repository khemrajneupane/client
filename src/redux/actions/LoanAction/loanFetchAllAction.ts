import { Dispatch } from 'react'
import { BookActions, Books, BOOKS_LIST, Loan, LoanFetchActions, LOAN_FETCH } from '../../../types'
import bookService from '../../../services/bookServices'
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
  try{
    const loans = await loanServices.getAll()
    dispatch(fetchLoans(loans))
  }catch(error){
    console.log(error)
  }
}
export default loanList
