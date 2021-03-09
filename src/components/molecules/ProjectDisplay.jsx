import { useRouter } from 'next/router'
import { Box, Stack } from '@chakra-ui/layout'
import { MotionBox, MotionImage } from '../../motion/motionComponents'
import Overlay from '../atoms/Overlay'
import { projects } from '../../constants/projects'
import CardSubtitle from '../atoms/CardSubtitle'
import CardTitle from '../atoms/CardTitle'
import Description from '../atoms/Description'

const ProjectDisplay = ({ id }) => {
  const router = useRouter()

  /* --------------- FIND PROJECT BY ID ---------------*/
  const {
    color1,
    color2,
    projectType,
    projectTitle,
    img,
    description,
  } = projects.find((project) => project.id == id)

  /* --------------- CLOSE MODAL ---------------*/

  const handleModal = () => {
    const options = { scroll: false }

    /* --------------- ROUTE TO/AS/CONFIG ---------------*/
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
              <CardSubtitle>{projectType}</CardSubtitle>
              <CardTitle size="lg">{projectTitle}</CardTitle>
            </Box>
            <Description>{description}</Description>
          </Stack>
        </Stack>
      </MotionBox>
    </>
  )
}

export default ProjectDisplay
