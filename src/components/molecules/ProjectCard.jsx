import { Heading, Text } from '@chakra-ui/layout'
import { MotionBox } from '../../motion/motionComponents'

const ProjectCard = ({ color1, color2, projectType, projectTitle }) => {
  return (
    <MotionBox
      p="2rem"
      h="18rem"
      borderRadius=".5rem"
      bgGradient={`linear(to-bl, ${color1}, ${color2})`}
    >
      <Text color="portfolio.white">{projectType}</Text>
      <Heading as="h3" size="md" color="portfolio.white">
        {projectTitle}
      </Heading>
    </MotionBox>
  )
}

export default ProjectCard
