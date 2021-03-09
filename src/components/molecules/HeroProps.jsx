import { Image } from '@chakra-ui/image'
import { Filter } from '../atoms/Filter'

const HeroProps = () => {
  return (
    <>
      <Image
        pos="absolute"
        w="150px"
        bottom="150"
        left="-20"
        zIndex="-2"
        src="./img/3d-cube.png"
        filter="drop-shadow(20px 30px 50px rgba(0, 0, 0, 0.25))"
        alt=""
      />
      <Filter top="150px" right="-20px" />
      <Image
        pos="absolute"
        w="150px"
        top="150"
        right="-20"
        zIndex="-2"
        src="./img/3d-diamond.png"
        filter="drop-shadow(20px 30px 50px rgba(0, 0, 0, 0.25))"
        alt=""
      />
    </>
  )
}

export default HeroProps
