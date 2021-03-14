import { MotionImage } from '../../motion/motionComponents'
import { prop } from '../../motion/motionVariants'

const HeroProps = () => {
  return (
    <>
      <MotionImage
        pos="absolute"
        w="150px"
        bottom="50"
        left={{ base: '-20', md: '0', lg: '100' }}
        zIndex="-2"
        src="./img/3d-cube.webp"
        filter="drop-shadow(20px 30px 50px rgba(0, 0, 0, 0.25))"
        alt=""
        variants={prop}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      />
      <MotionImage
        pos="absolute"
        w="120px"
        top={{ base: '200' }}
        right={{ base: '-20', md: '0', lg: '100' }}
        zIndex="-2"
        src="./img/3d-diamond.webp"
        filter="drop-shadow(20px 30px 50px rgba(0, 0, 0, 0.25))"
        alt=""
        variants={prop}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      />
    </>
  )
}

export default HeroProps
