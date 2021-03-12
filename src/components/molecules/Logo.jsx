import { Heading } from '@chakra-ui/layout'
import { MotionHStack } from '../../motion/motionComponents'
import { handMotion } from '../../motion/motionVariants'
import Emoji from '../atoms/Emoji'
import SmoothLink from '../atoms/SmoothLink'
import { animateScroll as scroll } from 'react-scroll'

const Logo = () => {
  return (
    <SmoothLink onClick={scroll.scrollToTop}>
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
    </SmoothLink>
  )
}

export default Logo
