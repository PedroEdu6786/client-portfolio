import { Heading } from '@chakra-ui/layout'

const Title = ({ children, ...rest }) => {
  return (
    <Heading size="lg" align="center" {...rest}>
      {children}
    </Heading>
  )
}

export default Title
