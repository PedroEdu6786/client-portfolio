import { Box } from '@chakra-ui/layout'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import SEOHead from '../molecules/SEOHead'

const PageTemplate = ({ children, ...rest }) => {
  return (
    <Box {...rest}>
      <SEOHead />
      <Header />
      <Box pt="5rem">{children}</Box>
      <Footer />
    </Box>
  )
}

export default PageTemplate
