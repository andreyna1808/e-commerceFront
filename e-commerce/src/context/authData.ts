import React, { useMemo, useState } from "react"
import { setToken, setUser } from "../utils/api/token"

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

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout: () => null,
    }),
    [auth]
  );
  
  return authData
}

export default AuthData
