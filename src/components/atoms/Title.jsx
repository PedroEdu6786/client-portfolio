import { Heading } from '@chakra-ui/layout'

const Title = ({ children, ...rest }) => {
  return (
    <Heading
      fontSize={{ base: '1.8rem', md: '2rem', lg: '2.5rem' }}
      align="center"
      {...rest}
    >
      {children}
    </Heading>
  )
}

export default Title
