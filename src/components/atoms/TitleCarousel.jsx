import { MotionHeading } from '../../motion/motionComponents'

const TitleCarousel = ({ children, ...rest }) => {
  return (
    <MotionHeading
      as="h2"
      fontSize="5rem"
      color="portfolio.lightGray"
      // initial={{ x: '100%' }}
      // animate={{ x: '-100%' }}
      // transition={{ type: 'linear', repeat: Infinity }}
      {...rest}
    >
      {children}
    </MotionHeading>
  )
}

export default TitleCarousel
