import { Image } from '@chakra-ui/image'

const ServicesProps = () => {
  return (
    <>
      <Image
        src="/img/3d-sphere.png"
        pos="absolute"
        w="150px"
        zIndex="-2"
        top="50px"
        right={{ base: '-50px', md: 0, lg: '50' }}
      />
      <Image
        src="/img/3d-cube.png"
        pos="absolute"
        w="200px"
        zIndex="-2"
        bottom="150px"
        left={{ base: '-50px', md: 0, lg: '50' }}
      />
    </>
  )
}

export default ServicesProps
