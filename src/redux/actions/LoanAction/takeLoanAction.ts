import { Dispatch } from 'react'
import axios from 'axios'

import { Loan, LoanAddActions, LOAN_ADD} from '../../../types'
import loanServices from '../../../services/loanServices'
import bookList from '../BookActions/bookGetAllAction'
import loanList from './loanFetchAllAction'
import userList from '../UserActions/userGetAllAction'
//Book Add
function addLoan(loans: Loan): LoanAddActions {
  return {
    type: LOAN_ADD,
    payload: {
    loans
    }
  }
}
const loanAdd = async (book: any, dispatch: Dispatch<any>) => {
  try {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    const loggedUsrId = window.localStorage.getItem("userId")
    let usr = null
    let usrId = null
    if(loggedUserJSON && loggedUsrId){
        usr = JSON.parse(loggedUserJSON)
        usrId = JSON.parse(loggedUsrId)
    }
    const createLoan = await loanServices.create(usrId, book, usr.token)  
    dispatch(addLoan(createLoan ))
    loanList(dispatch)
    userList(dispatch)
    
  } catch (error) {
    if(error.name === 'TypeError'){
      alert('You must be logged in to perform this action')
    }
    
    console.log(error.name)
  }
}

export default loanAdd
