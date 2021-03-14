import { MotionBox } from '../../motion/motionComponents'

const Overlay = () => {
  return (
    <>
      <MotionBox
        bgColor="black"
        pos="fixed"
        top="0"
        zIndex="1"
        w="100%"
        h="200vh"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
      ></MotionBox>
    </>
  )
}

export default Overlay
