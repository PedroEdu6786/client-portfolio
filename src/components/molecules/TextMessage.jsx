import React from 'react'
import { MotionBox } from '../../motion/motionComponents'
import { prop } from '../../motion/motionVariants'

const TextMessage = ({ children, ...rest }) => {
  return (
    <MotionBox
      py="1.5rem"
      px="2rem"
      pos="absolute"
      zIndex="-1"
      bgColor="portfolio.white"
      filter="drop-shadow( 0px 4px 50px rgba(0, 0, 0, 0.05))"
      borderRadius="1rem"
      variants={prop}
      initial="hidden"
      animate="visible"
      {...rest}
    >
      {children}
    </MotionBox>
  )
}

export default TextMessage
