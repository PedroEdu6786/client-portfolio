import { Heading } from '@chakra-ui/layout'

const Title = ({ children, ...rest }) => {
  return (
    <Heading fontSize="1.8rem" align="center" {...rest}>
      {children}
    </Heading>
  )
}

export default Title
