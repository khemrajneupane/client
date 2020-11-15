import { combineReducers } from 'redux'

import bookAll from './BookReducers/bookFetchReducer'
import user from './UserReducers/userFetchReducers'
import author from './AuthorReducers/authorGetAllReducer'
import authorUpdate from './AuthorReducers/authorUpdateReducer'
import loggerInfo from './LoginReducer/loginReducer'
import loanAddReducer from './LoanReducers/loanAddReducer'
import myBasket from './BasketReducers/basketReducer'
import loan from './LoanReducers/loanFetchReducers'

const createRootReducer = () =>
  combineReducers({
    bookAll,
    user,
    author,
    authorUpdate,
    loggerInfo,
    loanAddReducer,
    myBasket,
    loan
  })

export default createRootReducer
