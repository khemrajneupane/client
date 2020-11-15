import { Dispatch } from 'react'
import { Loan, LoanRemoveActions, LOAN_REMOVE } from '../../../types'
import loanServices from '../../../services/loanServices'
import loanList from './loanFetchAllAction'

function removeLoan(loan: Loan): LoanRemoveActions {
  return {
    type: LOAN_REMOVE,
    payload: {
      loan
    },
  }
}

const loanRemove = async (loan: Loan, dispatch: Dispatch<any>) => {
  try {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    let user = null
    if(loggedUserJSON){
      user = JSON.parse(loggedUserJSON)
    }
    const removeThisBook = await loanServices.remove( loan.id, user.token)  
    dispatch(removeLoan(removeThisBook))
    loanList(dispatch)
    
  } catch (error) {
    if(error.name === 'TypeError'){
      alert('You must be logged in to perform this action')
    }
  }
}

export default loanRemove