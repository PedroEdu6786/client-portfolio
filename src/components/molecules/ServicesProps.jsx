import { Image } from '@chakra-ui/image'
import { Filter } from '../atoms/Filter'

const ServicesProps = () => {
  return (
    <>
      <Filter top="120px" right="-50px" />
      <Image
        src="/img/3d-ring.png"
        pos="absolute"
        w="150px"
        zIndex="-2"
        top="120px"
        right="-50px"
      />
      <Filter bottom="150px" left="-50px" />
      <Image
        src="/img/3d-pill.png"
        pos="absolute"
        w="150px"
        zIndex="-2"
        bottom="150px"
        left="-50px"
      />
    </>
  )
}

export default ServicesProps
