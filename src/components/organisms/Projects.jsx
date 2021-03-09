import { useRouter } from 'next/router'
import { Stack } from '@chakra-ui/layout'
import { AnimatePresence } from 'framer-motion'
import Title from '../atoms/Title'
import TitleCarousel from '../atoms/TitleCarousel'
import ProjectDisplay from '../molecules/ProjectDisplay'
import ProjectCard from '../molecules/ProjectCard'
import MarginTemplate from '../templates/MarginTemplate'
import { projects } from '../../constants/projects'
import SectionTemplate from '../templates/SectionTemplate'

const Projects = () => {
  /* --------------- CONTEXTUAL ROUTING TOOLS ---------------*/
  const router = useRouter()
  const { projectId } = router.query

  return (
    <SectionTemplate>
      {/* --------------- PROJECT SUBTITLE ---------------*/}
      <Stack my="5rem" justify="center" pos="relative" overflow="hidden">
        <Title mx="2rem">Featured Projects that shocked clients</Title>
        <TitleCarousel
          pos="absolute"
          clear="both"
          display="inline-block"
          whiteSpace="nowrap"
          textOverflow="clip"
          zIndex="-1"
        >
          Featured Projects
        </TitleCarousel>
      </Stack>

      {/* --------------- PROJECTS CARDS ---------------*/}
      <MarginTemplate>
        <Stack mt="3rem" spacing="1.5rem">
          {projects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </Stack>
      </MarginTemplate>

      {/* --------------- PROJECT MODAL ---------------*/}
      <AnimatePresence>
        {projectId && <ProjectDisplay id={projectId} />}
      </AnimatePresence>
    </SectionTemplate>
  )
}

export default Projects
