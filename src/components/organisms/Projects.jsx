import { useState } from 'react'
import { Box, Stack } from '@chakra-ui/layout'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { MotionBox } from '../../motion/motionComponents'
import Title from '../atoms/Title'
import TitleCarousel from '../atoms/TitleCarousel'
import ProjectCard from '../molecules/ProjectCard'
import MarginTemplate from '../templates/MarginTemplate'

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <>
      <Box mt="10rem">
        <Stack align="center" justify="center" pos="relative" overflow="hidden">
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
      </Box>
      <MarginTemplate>
        <Stack mt="3rem" spacing="1.5rem">
          <AnimateSharedLayout type="crossfade">
            {projects.map((item) => (
              <MotionBox
                key={item.id}
                layoutId={item.id}
                onClick={() => setSelectedId(item.id)}
              >
                <ProjectCard
                  color1={item.color1}
                  color2={item.color2}
                  projectType={item.projectType}
                  projectTitle={item.projectTitle}
                />
              </MotionBox>
            ))}

            <AnimatePresence>
              {selectedId && (
                <MotionBox
                  layoutId={selectedId}
                  onClick={() => setSelectedId(null)}
                >
                  <ProjectCard
                    color1={projects[selectedId].color1}
                    color2={projects[selectedId].color2}
                    projectType={projects[selectedId].projectType}
                    projectTitle={projects[selectedId].projectTitle}
                  />
                </MotionBox>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </Stack>
      </MarginTemplate>
    </>
  )
}

const projects = [
  {
    id: 0,
    color1: 'portfolio.lightPurple',
    color2: 'portfolio.darkPurple',
    projectType: 'Ecommerce',
    projectTitle: 'Lorem ipsum dolor',
  },
  {
    id: 1,
    color1: 'portfolio.lightOrange',
    color2: 'portfolio.darkOrange',
    projectType: 'Ecommerce',
    projectTitle: 'Lorem ipsum dolor',
  },
  {
    id: 2,
    color1: 'portfolio.lightRed',
    color2: 'portfolio.darkRed',
    projectType: 'Ecommerce',
    projectTitle: 'Lorem ipsum dolor',
  },
  {
    id: 3,
    color1: 'portfolio.lightBlue',
    color2: 'portfolio.darkBlue',
    projectType: 'Ecommerce',
    projectTitle: 'Lorem ipsum dolor',
  },
]

export default Projects
