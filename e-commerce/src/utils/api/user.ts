import axios from "axios";
import { BASE_URL } from "../constants"

export const RegisterAPI = async (formData) => {
  try {
    const url = `${BASE_URL}/api/auth/local/register`
    const body = JSON.stringify(formData)
    const params = {
      headers: {
        "Content-Type": 'application/json'
      },
    };

    const response = await axios.post(url, body, params)
    const result = await response.data
    return result

  } catch (error) {
    return null
  }
}

export const LoginAPI = async (formData) => {
  try {
    const url = `${BASE_URL}/api/auth/local`
    const body = {...formData, identifier: formData.username}
    const params = {
      headers: {
        "Content-Type": 'application/json'
      },
    };

    const response = await axios.post(url, body, params)
    const result = await response.data
    return result

  } catch (error) {
    return null
  }
}