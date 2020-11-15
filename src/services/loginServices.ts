import axios from "axios";
import { API_URL_LOGIN } from "../constants/CONSTANTS";
import { Users } from "../types";

const login = async (credentials: Users) => {
  const response = await axios.post(API_URL_LOGIN, credentials);
  return response.data;
};

export default { login };