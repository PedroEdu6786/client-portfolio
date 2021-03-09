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
      {/* --------------- TEXT MESSAGES POP UPS ---------------*/}
      <HeroMessages />

      {/* --------------- 3D IMAGES ---------------*/}
      <HeroProps />

      {/* --------------- HERO CONTENT ---------------*/}
      <MarginTemplate>
        <Stack align="center" spacing="3rem">
          {/* --------------- MIDDLE ICON ---------------*/}
          <HeroIcon />

          {/* --------------- TEXT AND CALL TO ACTION ---------------*/}
          <HeroHeadline />

          {/* --------------- SOCIAL LINKS ---------------*/}
          <SocialMedia />
        </Stack>
      </MarginTemplate>
    </HeroTemplate>
  )
}

export default Hero
