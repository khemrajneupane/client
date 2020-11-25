import axios from 'axios'
import { API_URL_GOOGLE_LOGIN } from '../constants/CONSTANTS'

const login = async () => {
  const response = await axios.post(API_URL_GOOGLE_LOGIN)
  console.log(
    'from googleLogin login services, response.data is: ',
    response.data
  )
  return response.data
}

export default { login }
