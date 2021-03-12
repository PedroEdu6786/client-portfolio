import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { MotionHStack } from '../../motion/motionComponents'
import { socialIcon } from '../../motion/motionVariants'
import SocialIcon from './SocialIcon'

const SocialMedia = () => {
  return (
    <MotionHStack
      variants={socialIcon}
      initial="hidden"
      animate="visible"
      spacing="1rem"
      color="portfolio.blue"
    >
      <SocialIcon
        icon={AiOutlineInstagram}
        to="https://www.instagram.com/pcruz.codes/"
      />
      <SocialIcon icon={AiOutlineWhatsApp} to="https://wa.me/9994364756" />
      <SocialIcon
        icon={FaLinkedinIn}
        to="https://www.linkedin.com/in/pedro-eduardo-cruz-de-la-fuente-1b632b176/"
      />
    </MotionHStack>
  )
}

export default SocialMedia
