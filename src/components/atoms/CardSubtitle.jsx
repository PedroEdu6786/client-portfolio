import { Text } from '@chakra-ui/layout'

const CardSubtitle = ({ children, ...rest }) => {
  return (
    <Text fontSize={{ md: '1.2rem' }} {...rest}>
      {children}
    </Text>
  )
}

export default CardSubtitle
