import { HStack } from '@chakra-ui/layout'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import ReactIcon from '../atoms/ReactIcon'

const SocialMedia = () => {
  return (
    <HStack spacing="1rem" color="portfolio.blue">
      <ReactIcon icon={AiOutlineInstagram} />
      <ReactIcon icon={AiOutlineWhatsApp} />
      <ReactIcon icon={FaLinkedinIn} />
    </HStack>
  )
}

export default SocialMedia
