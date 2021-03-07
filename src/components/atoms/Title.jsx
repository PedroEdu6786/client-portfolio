import { Heading } from '@chakra-ui/layout'

const Title = ({ children }) => {
  return (
    <Heading size="lg" align="center">
      {children}
    </Heading>
  )
}

export default Title
