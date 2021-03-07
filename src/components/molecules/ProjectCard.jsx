import Link from 'next/link'
import Image from 'next/image'
import { Heading, Text } from '@chakra-ui/react'
import {
  MotionBox,
  MotionImage,
  MotionLink,
} from '../../motion/motionComponents'

const ProjectCard = ({ item }) => {
  const { id, color1, color2, projectTitle, projectType, img } = item
  return (
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
      >
        <Text color="portfolio.white">{projectType}</Text>
        <Heading as="h3" size="md" color="portfolio.white">
          {projectTitle}
        </Heading>
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
  )
}

const phone = {
  hover: {
    y: -180,
  },
}

const hand = {
  hover: {
    x: 20,
  },
}

export default ProjectCard

// import { Heading, Text } from '@chakra-ui/react'
// import {
//   MotionBox,
//   MotionImage,
//   MotionLink,
// } from '../../motion/motionComponents'

// const ProjectCard = ({ item }) => {
//   const { id, color1, color2, projectTitle, projectType, img } = item
//   return (
//     <MotionLink href={`/?projectId=${id}`} as={`/${id}`} scroll={false}>
//       <MotionBox
//         p="2rem"
//         h="18rem"
//         borderRadius=".5rem"
//         bgGradient={`linear(to-bl, ${color1}, ${color2})`}
//         layoutId={id}
//         overflow="hidden"
//         whileHover="hover"
//         cursor="pointer"
//         pos="relative"
//       >
//         <Text color="portfolio.white">{projectType}</Text>
//         <Heading as="h3" size="md" color="portfolio.white">
//           {projectTitle}
//         </Heading>
//         <MotionImage
//           src={img}
//           alt="project-prop"
//           width={184}
//           height={360}
//           right="5"
//           bottom="-130%"
//           pos="absolute"
//           variants={phone}
//         />
//         <MotionImage
//           src="/img/handz-thumbs.png"
//           alt="project-prop"
//           width={200}
//           top="10rem"
//           left="-5"
//           pos="absolute"
//           variants={hand}
//         />
//       </MotionBox>
//     </MotionLink>
//   )
// }

// const phone = {
//   hover: {
//     y: -180,
//   },
// }

// const hand = {
//   hover: {
//     x: 20,
//   },
// }

// export default ProjectCard
