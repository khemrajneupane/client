import axios from 'axios'

import { AuthorId, Authors } from '../../src/types'
import { API_URL_AUTHORS } from '../constants/CONSTANTS'


let token: any = null;

const setToken = (newToken: any) => {
  token = `bearer ${newToken}`;
};
const getAll = () => {
  const request = axios.get(API_URL_AUTHORS)
  return request.then((response) => response.data)
}
const getById = (id: AuthorId) => {
  const request = axios.get(`${API_URL_AUTHORS}/${id}`);
  return request.then((response) => response.data);
};

const create = (newObject: Authors, token: any) => {
    const config = {
        headers: { Authorization: `bearer ${token}` }
      };
  const request = axios.post(API_URL_AUTHORS, newObject, config)
  return request.then((response) => response.data)
}
const update = (newObject: Authors, id: AuthorId, token: any) => {
    const config = {
        headers: { Authorization: `bearer ${token}` }
      };
  const request = axios.put(`${API_URL_AUTHORS}/${id}`, newObject, config)
  return request.then((response) => response.data)
}

export default { getAll, create, setToken, getById, update }
