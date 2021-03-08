import { HStack } from '@chakra-ui/layout'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import SocialIcon from './SocialIcon'

const SocialMedia = () => {
  return (
    <HStack spacing="1rem" color="portfolio.blue">
      <SocialIcon icon={AiOutlineInstagram} />
      <SocialIcon icon={AiOutlineWhatsApp} />
      <SocialIcon icon={FaLinkedinIn} />
    </HStack>
  )
}

export default SocialMedia
