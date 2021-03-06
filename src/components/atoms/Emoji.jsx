import { Heading } from '@chakra-ui/react'
import { MotionBox } from '../../motion/motionComponents'

const Emoji = ({ label, symbol, ...rest }) => {
  return (
    <MotionBox
      as="span"
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
      {...rest}
    >
      <Heading as="h3" size="md">
        {symbol}
      </Heading>
    </MotionBox>
  )
}

export default Emoji
