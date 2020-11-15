import axios from 'axios'

import { API_URL_USERS } from '../constants/CONSTANTS'
import { BookId, Users } from '../../src/types'
const getAll = () => {
  const request = axios.get(API_URL_USERS)
  return request.then((response) => response.data)
}

const create = (newObject: Users) => {
  const request = axios.post(API_URL_USERS, newObject)
  return request.then((response) => response.data)
}
//update
const update = (newObject: Users,id: BookId, token: any) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  const request = axios.put(`${API_URL_USERS}/${id}`, newObject, config)
  return request.then((response) => response.data)
}
export default { getAll, create, update }
