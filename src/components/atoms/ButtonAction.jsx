import { MotionButton } from '../../motion/motionComponents'

const ButtonAction = ({ children, ...rest }) => {
  return (
    <MotionButton
      bgColor="#6380E8"
      color="portfolio.white"
      _hover={{ bgColor: 'portfolio.darkBlue' }}
      {...rest}
    >
      {children}
    </MotionButton>
  )
}

export default ButtonAction
