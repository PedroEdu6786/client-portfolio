import Icon from '@chakra-ui/icon'
import { MotionBox } from '../../motion/motionComponents'
import { iconMotion } from '../../motion/motionVariants'

const ReactIcon = ({ icon, ...rest }) => {
  return (
    <MotionBox
      color="portfolio.blue"
      p=".5rem"
      border="3px solid"
      borderColor="portfolio.blue"
      borderRadius="50%"
      cursor="pointer"
      variants={iconMotion}
      whileHover="show"
      whileTap="show"
    >
      <Icon as={icon} fontSize="2rem" {...rest} />
    </MotionBox>
  )
}

export default ReactIcon
