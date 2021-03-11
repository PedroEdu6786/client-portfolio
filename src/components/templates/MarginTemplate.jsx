import { Box } from '@chakra-ui/layout'
import React from 'react'

const MarginTemplate = ({ children, ...rest }) => {
  return (
    <Box
      mx={{ base: '2rem', md: '4rem', lg: 'auto' }}
      maxW={{ lg: '800px', xl: '1000px', '2xl': '1400px' }}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default MarginTemplate
