import { Box } from '@chakra-ui/layout'

const SectionTemplate = ({ children, ...rest }) => {
  return (
    <Box as="section" py="10rem" {...rest}>
      {children}
    </Box>
  )
}

export default SectionTemplate
