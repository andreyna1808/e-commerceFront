import { ChakraProvider } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import AuthContext from "../context/AuthContext";
import ToastAnimated from "../utils/toastify";
import jwt_decode from 'jwt-decode'
import { setToken } from "../utils/api/token";

interface Token {
  exp: number,
  iat: number,
  id: number
}

function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined)
  console.log('auth', auth)

  const login = (token) => {
    setToken(token)
    const decodeToken: Token =  jwt_decode(token)
    setAuth({
      token,
      idUser: decodeToken.id
    })
  }

  const authData = useMemo(
    () => ({
      auth: { name: "Andreyna", email: "andreyna.m.carvalho@gmail.com" },
      login,
      logout: () => null,
      setReloadUser: () => null,
    }),
    []
  );

  return (
    <ChakraProvider>
      <AuthContext.Provider value={authData}>
        <Component {...pageProps} />
        <ToastAnimated />
      </AuthContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
