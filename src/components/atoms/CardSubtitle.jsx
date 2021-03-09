import { Text } from '@chakra-ui/layout'

const CardSubtitle = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>
}

export default CardSubtitle
