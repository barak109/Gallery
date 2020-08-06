import axios from "axios";
import {GET_USER_URL} from "../configs/configs";

export const getUserData = () => {
  try {
    const response = axios.get(GET_USER_URL);
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
