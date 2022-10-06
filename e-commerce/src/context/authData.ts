import React, { useMemo, useState } from "react"
import { deleteToken, deleteUser, setToken, setUser } from "../utils/api/token"

const AuthData = () => {
  const [auth, setAuth] = useState(undefined)

  const login = (token, user) => {
    setToken(token)
    setUser(JSON.stringify(user))
    setAuth({
      token,
      user,
    })
  }

  const logout = () => {
    deleteToken()
    deleteUser()
    setAuth(null)
  }

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );
  
  return authData
}

export default AuthData
