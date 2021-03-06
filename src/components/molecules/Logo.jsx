import { Heading } from '@chakra-ui/layout'
import { MotionHStack } from '../../motion/motionComponents'
import { handMotion } from '../../motion/motionVariants'
import Emoji from '../atoms/Emoji'

const Logo = () => {
  return (
    <MotionHStack
      spacing=".25rem"
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      animate="rest"
      cursor="pointer"
    >
      <Emoji variants={handMotion} symbol="👋🏻" />
      <Heading as="h3" size="sm">
        Pedro Cruz
      </Heading>
    </MotionHStack>
  )
}

export default Logo
