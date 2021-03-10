import { Heading } from '@chakra-ui/layout'

const Title = ({ children, ...rest }) => {
  return (
    <Heading fontSize={{ base: '1.8rem', md: '2rem' }} align="center" {...rest}>
      {children}
    </Heading>
  )
}

export default Title
