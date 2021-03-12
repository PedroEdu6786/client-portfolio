import { MotionHeading } from '../../motion/motionComponents'

const Title = ({ children, ...rest }) => {
  return (
    <MotionHeading
      fontSize={{ base: '1.8rem', md: '2rem', lg: '2.5rem' }}
      align="center"
      {...rest}
    >
      {children}
    </MotionHeading>
  )
}

export default Title
