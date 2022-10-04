import { TOKEN, USER } from "../constants"

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

// USER
export const setUser = (user) => {
  localStorage.setItem(USER, user)
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem(USER))
}

export const deleteUser = () => {
  return localStorage.removeItem(USER)
}
