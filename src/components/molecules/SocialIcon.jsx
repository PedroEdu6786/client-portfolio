import Link from 'next/link'
import { MotionBox } from '../../motion/motionComponents'
import { iconMotion } from '../../motion/motionVariants'
import ReactIcon from '../atoms/ReactIcon'

const SocialIcon = ({ icon, to, ...rest }) => {
  return (
    <MotionBox
      color="portfolio.blue"
      p=".5rem"
      border="3px solid"
      borderColor="portfolio.blue"
      borderRadius="50%"
      cursor="pointer"
      variants={iconMotion}
      whileHover="show"
      whileTap="show"
    >
      <Link href={to}>
        <a target="_blank">
          <ReactIcon as={icon} fontSize="2rem" {...rest} />
        </a>
      </Link>
    </MotionBox>
  )
}

export default SocialIcon
