import React, { useMemo, useState } from "react"
import { deleteToken, setToken } from "../utils/api/token"

const AuthData = () => {
  const [auth, setAuth] = useState(undefined)

  const login = (token) => {
    setToken(token)
    setAuth(token)
  }

  const logout = () => {
    deleteToken()
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
