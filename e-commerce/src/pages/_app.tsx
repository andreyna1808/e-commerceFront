import { ChakraProvider } from '@chakra-ui/react'
import ToastAnimated from '../utils/toastify'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <ToastAnimated/>
    </ChakraProvider>
  )
}

export default MyApp
