import { Box } from '@chakra-ui/layout'

const HeroTemplate = ({ children, ...rest }) => {
  return (
    <Box
      as="section"
      h="100vh"
      py="5rem"
      mt={{ base: '-2rem', md: '-5rem' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default HeroTemplate
