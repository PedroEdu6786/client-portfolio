import { Heading } from '@chakra-ui/layout'
import React from 'react'

const CardTitle = ({ children, ...rest }) => {
  return (
    <Heading as="h3" fontSize={{ base: '1.2rem', md: '1.5rem' }} {...rest}>
      {children}
    </Heading>
  )
}

export default CardTitle
