import { ChakraProvider } from "@chakra-ui/react";
import AuthContext from "../context/AuthContext";
import ToastAnimated from "../utils/toastify";
import AuthData from "../context/authData";

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <AuthContext.Provider value={AuthData()}>
        <Component {...pageProps} />
        <ToastAnimated />
      </AuthContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
