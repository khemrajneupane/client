import axios from 'axios'

import {  AuthorId, Books, BookId } from '../types'
import { API_URL_BOOKS } from '../constants/CONSTANTS'

let token: any = null;

const setToken = (newToken: any) => {
  token = `bearer ${newToken}`;
};
const getAll = () => {
  const request = axios.get(API_URL_BOOKS)
  return request.then((response) => response.data)
}

const create = (newObject: Books, token: any) => {
  const config = {
      headers: { Authorization: `bearer ${token}` }
    };
const request = axios.post(API_URL_BOOKS, newObject, config)
return request.then((response) => response.data)
}
//update
const update = (newObject: Books,authorId: AuthorId, token: any) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  const request = axios.put(`${API_URL_BOOKS}/${authorId}`, newObject, config)
  return request.then((response) => response.data)
}
//delete
const remove = (id: any, token: any) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  const request = axios.delete(`${API_URL_BOOKS}/${id}`,config)
  return request.then((response) => response.data)
}
export default { getAll, create, setToken, update, remove }
