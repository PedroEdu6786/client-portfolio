import { Box } from '@chakra-ui/layout'

const TextVariant = ({ children, ...rest }) => {
  return (
    <Box as="span" color="portfolio.blue" {...rest}>
      {children}
    </Box>
  )
}

export default TextVariant
