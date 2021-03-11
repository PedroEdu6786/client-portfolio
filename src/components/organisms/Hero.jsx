import { Stack } from '@chakra-ui/layout'
import HeroIcon from '../molecules/HeroIcon'
import HeroMessages from '../molecules/HeroMessages'
import HeroProps from '../molecules/HeroProps'
import SocialMedia from '../molecules/SocialMedia'
import HeroHeadline from '../molecules/HeroHeadline'
import HeroTemplate from '../templates/HeroTemplate'
import MarginTemplate from '../templates/MarginTemplate'

const Hero = () => {
  return (
    <HeroTemplate pos="relative" overflow="hidden">
      {/* --------------- HERO CONTENT ---------------*/}
      <Stack align="center" spacing="3rem" pos="relative" w="100%">
        {/* --------------- TEXT MESSAGES POP UPS ---------------*/}
        <HeroMessages />

        {/* --------------- 3D IMAGES ---------------*/}
        <HeroProps />

        {/* --------------- MIDDLE ICON ---------------*/}
        <HeroIcon />

        {/* --------------- TEXT AND CALL TO ACTION ---------------*/}
        <HeroHeadline />

        {/* --------------- SOCIAL LINKS ---------------*/}
        <SocialMedia />
      </Stack>
    </HeroTemplate>
  )
}

export default Hero
