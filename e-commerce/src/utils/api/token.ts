import { TOKEN, USER } from "../constants"
import jwt_decode from 'jwt-decode'

interface Token {
  exp: number,
  iat: number,
  id: number
}

export const HasExpiredToken = (token) => {
  const oneSecond = 1000

  const decodeToken: Token = jwt_decode(token)
  const expireDate = decodeToken?.exp * oneSecond;
  const currentDate = new Date().getTime();

  if (currentDate > expireDate) {
    return true
  }
  return false
}

// TOKEN
export const setToken = (token) => {
  localStorage.setItem(TOKEN, token)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN)
}

export const deleteToken = () => {
  return localStorage.removeItem(TOKEN)
}