import { Text } from '@chakra-ui/layout'

const Description = ({ children, ...rest }) => {
  return (
    <Text fontSize=".9rem" {...rest}>
      {children}
    </Text>
  )
}

export default Description
