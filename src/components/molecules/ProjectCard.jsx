import Link from 'next/link'
import { Heading, Text } from '@chakra-ui/layout'
import { MotionBox } from '../../motion/motionComponents'

const ProjectCard = ({ item }) => {
  const { id, color1, color2, projectTitle, projectType } = item
  return (
    <Link href={`/?projectId=${id}`} as={`/${id}`} scroll={false}>
      <MotionBox
        p="2rem"
        h="18rem"
        borderRadius=".5rem"
        bgGradient={`linear(to-bl, ${color1}, ${color2})`}
        layoutId={`${id}`}
      >
        <Text color="portfolio.white">{projectType}</Text>
        <Heading as="h3" size="md" color="portfolio.white">
          {projectTitle}
        </Heading>
      </MotionBox>
    </Link>
  )
}

export default ProjectCard
