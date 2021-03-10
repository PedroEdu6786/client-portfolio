import { Image } from '@chakra-ui/image'
import { Filter } from '../atoms/Filter'

const HeroProps = () => {
  return (
    <>
      <Image
        pos="absolute"
        w="150px"
        bottom="150"
        left={{ base: '-20', md: '0' }}
        zIndex="-2"
        src="./img/3d-cube.png"
        filter="drop-shadow(20px 30px 50px rgba(0, 0, 0, 0.25))"
        alt=""
      />
      <Filter top="300px" right="0" />
      <Image
        pos="absolute"
        w="150px"
        top={{ base: '300' }}
        right={{ base: '-20', md: '0' }}
        zIndex="-2"
        src="./img/3d-diamond.png"
        filter="drop-shadow(20px 30px 50px rgba(0, 0, 0, 0.25))"
        alt=""
      />
    </>
  )
}

export default HeroProps
