import { Box } from '@chakra-ui/layout'
import React from 'react'

const TextMessage = ({ children, ...rest }) => {
  return (
    <Box
      py="1.5rem"
      px="2rem"
      pos="absolute"
      zIndex="-1"
      bgColor="portfolio.white"
      filter="drop-shadow( 0px 4px 50px rgba(0, 0, 0, 0.05))"
      borderRadius="1rem"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default TextMessage
