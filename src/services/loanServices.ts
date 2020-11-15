import axios from 'axios'

import { BoK, BookId, Loan, LoanId, UserId, UsR } from '../types'
import { API_URL_LOANS } from '../constants/CONSTANTS'

let token: any = null;

const setToken = (newToken: any) => {
  token = `bearer ${newToken}`;
};
const getAll = () => {
  const request = axios.get(API_URL_LOANS)
  return request.then((response) => response.data)
}

const create = (user: any, book: any, token: any) => {
  const config = {
      headers: { Authorization: `bearer ${token}` }
    };

const request = axios.post(API_URL_LOANS, {user, book}, config)
return request.then((response) => response.data)
}
//update
const update = (newObject: Loan, loanId: LoanId, token: any) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  const request = axios.put(`${API_URL_LOANS}/${loanId}`, newObject, config)
  return request.then((response) => response.data)
}
//delete
const remove = (id: any, token: any) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  const request = axios.delete(`${API_URL_LOANS}/${id}`,config)
  return request.then((response) => response.data)
}
export default { getAll, create, setToken, update, remove }