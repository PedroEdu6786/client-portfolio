import {
  MotionBox,
  MotionImage,
  MotionLink,
} from '../../motion/motionComponents'
import CardSubtitle from '../atoms/CardSubtitle'
import CardTitle from '../atoms/CardTitle'

const ProjectCard = ({ item }) => {
  const { id, color1, color2, projectTitle, projectType, img } = item
  return (
    <>
      {/* --------------- href= mydomain/{projectid} routing to project modal ---------------*/}
      <MotionLink href={`/?projectId=${id}`} as={`/${id}`} scroll={false}>
        <MotionBox
          p="2rem"
          h="18rem"
          borderRadius=".5rem"
          bgGradient={`linear(to-bl, ${color1}, ${color2})`}
          layoutId={`${id}`}
          overflow="hidden"
          pos="relative"
          cursor="pointer"
          color="portfolio.white"
        >
          <CardSubtitle>{projectType}</CardSubtitle>
          <CardTitle>{projectTitle}</CardTitle>
          <MotionImage
            src={img}
            alt="project-prop"
            width={184}
            height={360}
            bottom="-200"
            right="5"
            pos="absolute"
          />
        </MotionBox>
      </MotionLink>
    </>
  )
}

export default ProjectCard
