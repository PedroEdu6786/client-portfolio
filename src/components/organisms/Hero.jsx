import HeroIcon from '../molecules/HeroIcon'
import HeroMessages from '../molecules/HeroMessages'
import HeroProps from '../molecules/HeroProps'
import SocialMedia from '../molecules/SocialMedia'
import HeroHeadline from '../molecules/HeroHeadline'
import HeroTemplate from '../templates/HeroTemplate'
import { MotionStack } from '../../motion/motionComponents'

const Hero = () => {
  return (
    <HeroTemplate id="hero" pos="relative" overflow="hidden">
      {/* --------------- HERO CONTENT ---------------*/}
      <MotionStack align="center" spacing="3rem" pos="relative" w="100%">
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
      </MotionStack>
    </HeroTemplate>
  )
}

export default Hero
