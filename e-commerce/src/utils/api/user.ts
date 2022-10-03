import axios from "axios";
import { BASE_URL } from "../constants"

export const RegisterAPI = async (formData) => {
  try {
    const url = `${BASE_URL}/api/auth/local/register`
    const params = {
      headers: {
        "Content-Type": 'application/json'
      },
    };

    const response = await axios.post(url, JSON.stringify(formData), params)
    const result = await response.data

    console.log('Awqqqqq', result)
  } catch (error) {
    console.log('Erro', error, 'and', error.message)
    return null
  }
}