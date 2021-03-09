import { Box } from '@chakra-ui/layout'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const PageTemplate = ({ children, ...rest }) => {
  return (
    <Box {...rest}>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default PageTemplate
