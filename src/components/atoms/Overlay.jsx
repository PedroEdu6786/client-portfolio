import { Box } from '@chakra-ui/layout'
import { MotionBox } from '../../motion/motionComponents'

const Overlay = ({ isActive, setOverlay }) => {
  const handleClick = () => {
    if (isActive) setOverlay(!isActive)
  }

  return (
    <>
      {isActive && (
        <MotionBox
          bgColor="black"
          pos="fixed"
          zIndex="1"
          w="100vw"
          h="100vh"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 0.4 } : { opacity: 0 }}
          onClick={handleClick}
        ></MotionBox>
      )}
    </>
  )
}

export default Overlay
