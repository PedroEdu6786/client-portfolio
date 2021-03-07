import { useRouter } from 'next/router'
import { Box, Heading, Stack, Text } from '@chakra-ui/layout'
import { MotionBox, MotionImage } from '../../motion/motionComponents'
import Overlay from '../atoms/Overlay'
import { projects } from '../../constants/projects'

const ProjectDisplay = ({ id }) => {
  const router = useRouter()

  const { color1, color2, projectType, projectTitle, img } = projects.find(
    (project) => project.id == id
  )

  const handleModal = () => {
    const options = { scroll: false }
    router.push('/', '/', options)
  }

  return (
    <>
      <Box onClick={handleModal}>
        <Overlay />
      </Box>
      <MotionBox
        bgColor="portfolio.black"
        pos="fixed"
        zIndex="10"
        left="calc(-50vw + 50%)"
        right="calc(-50vw + 50%)"
        mx="auto"
        p="2rem"
        top="5rem"
        w="90%"
        h="600px"
        borderRadius="1rem"
        color="portfolio.white"
        layoutId={id}
      >
        <Stack spacing="2rem">
          <Box
            w="100%"
            h="150px"
            borderRadius="1rem"
            bgGradient={`linear(to-bl, ${color1}, ${color2})`}
            overflow="hidden"
            pos="relative"
          >
            <MotionImage
              src={img}
              alt="project-prop"
              width={184}
              height={360}
              bottom="-250"
              right="5"
              pos="absolute"
            />
          </Box>
          <Stack spacing="1.5rem">
            <Box>
              <Text>{projectType}</Text>
              <Heading size="lg">{projectTitle}</Heading>
            </Box>
            <Text fontSize=".9rem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              ducimus minima dicta obcaecati perferendis mollitia dolorum
              reiciendis autem accusantium delectus provident quis id explicabo
              perspiciatis quasi, consequatur repudiandae omnis dolore qui. Et
              architecto ab vero blanditiis dolorum temporibus excepturi at.
            </Text>
          </Stack>
        </Stack>
      </MotionBox>
    </>
  )
}

export default ProjectDisplay
