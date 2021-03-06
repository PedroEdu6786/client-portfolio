import { Box } from '@chakra-ui/layout'
import React from 'react'

const MarginTemplate = ({ children, ...rest }) => {
  return (
    <Box mx="2rem" {...rest}>
      {children}
    </Box>
  )
}

export default MarginTemplate
