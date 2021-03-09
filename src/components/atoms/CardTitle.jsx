import { Heading } from '@chakra-ui/layout'
import React from 'react'

const CardTitle = ({ children, ...rest }) => {
  return (
    <Heading as="h3" size="md" {...rest}>
      {children}
    </Heading>
  )
}

export default CardTitle
