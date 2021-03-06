import { Box } from '@chakra-ui/layout'

const Overlay = ({ isActive, setOverlay }) => {
  return (
    <>
      <Box
        display={{ base: 'block', md: 'none' }}
        bgColor="black"
        opacity={isActive ? '.5' : '0'}
        pos="fixed"
        zIndex={isActive ? '0' : '-1'}
        w="100vw"
        h="100vh"
        transition=".4s"
        onClick={() => setOverlay(!isActive)}
      ></Box>
    </>
  )
}

export default Overlay
