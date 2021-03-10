import { Box } from '@chakra-ui/layout'
import React from 'react'

const MarginTemplate = ({ children, ...rest }) => {
  return (
    <Box mx={{ base: '2rem', md: '4rem' }} {...rest}>
      {children}
    </Box>
  )
}

export default MarginTemplate
