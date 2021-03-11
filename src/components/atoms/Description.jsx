import { Text } from '@chakra-ui/layout'

const Description = ({ children, ...rest }) => {
  return (
    <Text fontSize={{ base: '.9rem', md: '1.1rem' }} {...rest}>
      {children}
    </Text>
  )
}

export default Description
