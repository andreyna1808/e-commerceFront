import axios from "axios"
import { getToken, HasExpiredToken } from "./api/token"

export const FetchAuth = async (url, logout) => {
  const token = getToken()

  if (token !== null && HasExpiredToken(token)) {
    logout()
  } else {
    const params = {
      headers: {
        Authorization: `Bearer ${token}`
      },
    }
    try {
      const response = await axios.get(url, params)
      const result = await response.data
      return result
    } catch (error) {
      return error
    }

  };
}