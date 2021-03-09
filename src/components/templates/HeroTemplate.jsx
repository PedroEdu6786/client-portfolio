import { Box } from '@chakra-ui/layout'

const HeroTemplate = ({ children, ...rest }) => {
  return (
    <Box as="section" h="100vh" py="5rem" {...rest}>
      {children}
    </Box>
  )
}

export default HeroTemplate
