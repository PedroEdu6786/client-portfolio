import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../src/theme/theme'
import Fonts from '../src/theme/components/Fonts'
import { AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
