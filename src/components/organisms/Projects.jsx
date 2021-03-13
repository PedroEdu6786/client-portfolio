import { useRouter } from 'next/router'
import { Box, HStack, Stack, Wrap, WrapItem } from '@chakra-ui/layout'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import Title from '../atoms/Title'
import TitleCarousel from '../atoms/TitleCarousel'
import ProjectDisplay from '../molecules/ProjectDisplay'
import ProjectCard from '../molecules/ProjectCard'
import MarginTemplate from '../templates/MarginTemplate'
import { projects } from '../../constants/projects'
import SectionTemplate from '../templates/SectionTemplate'
import { MotionHStack, MotionWrapItem } from '../../motion/motionComponents'

const Projects = () => {
  /* --------------- CONTEXTUAL ROUTING TOOLS ---------------*/
  const router = useRouter()
  const { projectId } = router.query

  return (
    <AnimateSharedLayout type="crossfade">
      <SectionTemplate id="projects">
        {/* --------------- PROJECT SUBTITLE ---------------*/}
        <Stack py="5rem" justify="center" pos="relative" overflow="hidden">
          <Title mx="2rem">Featured Projects that shocked clients</Title>
          <MotionHStack spacing="2.5rem" pos="absolute" zIndex="-1">
            <TitleCarousel>Featured Projects</TitleCarousel>
            <TitleCarousel>Featured Projects</TitleCarousel>
            <TitleCarousel>Featured Projects</TitleCarousel>
          </MotionHStack>
        </Stack>

        {/* --------------- PROJECTS CARDS ---------------*/}
        <MarginTemplate>
          <Wrap mt="3rem" spacing="1.5rem">
            {projects.map((item) => (
              <MotionWrapItem
                key={item.id}
                flexBasis={{ base: '30rem', md: '40%' }}
                style={{ flexGrow: item.id === 0 || item.id === 3 ? 3 : 1 }}
                whileHover={{ flexGrow: 20 }}
                transition={{ duration: 0.3, type: 'tween' }}
              >
                <ProjectCard item={item} />
              </MotionWrapItem>
            ))}
          </Wrap>
        </MarginTemplate>

        {/* --------------- PROJECT MODAL ---------------*/}
        <AnimatePresence>
          {projectId && <ProjectDisplay id={projectId} />}
        </AnimatePresence>
      </SectionTemplate>
    </AnimateSharedLayout>
  )
}

export default Projects
