import {
  MotionBox,
  MotionHeading,
  MotionHStack,
} from '../../motion/motionComponents'

const TitleCarousel = ({ children, ...rest }) => {
  return (
    <MotionHStack
      initial={{ x: 0 }}
      animate={{ x: '-100%' }}
      transition={{ ease: 'linear', repeat: Infinity, duration: 20 }}
      spacing="2.5rem"
    >
      <MotionHeading
        as="h2"
        fontSize={{ base: '5rem', md: '8rem' }}
        color="portfolio.lightGray"
        clear="both"
        display="inline-block"
        whiteSpace="nowrap"
        textOverflow="clip"
        {...rest}
      >
        {children}
      </MotionHeading>
      <MotionBox
        as="span"
        w="30px"
        h="30px"
        borderRadius="50%"
        bgColor="portfolio.lightGray"
      ></MotionBox>
    </MotionHStack>
  )
}

export default TitleCarousel
