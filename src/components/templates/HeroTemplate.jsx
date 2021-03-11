import { Box } from '@chakra-ui/layout'

const HeroTemplate = ({ children, ...rest }) => {
  return (
    <Box
      as="section"
      h="100vh"
      py={{ base: '3rem', md: '5rem' }}
      mt={{ base: '-2rem', md: '-5rem' }}
      display={{ md: 'flex' }}
      justifyContent={{ md: 'center' }}
      alignItems={{ md: 'center' }}
      maxW="1400px"
      mx="auto"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default HeroTemplate
