import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Stack, Text } from '@chakra-ui/layout'
import { Filter } from '../atoms/Filter'
import Title from '../atoms/Title'
import HeroIcon from '../molecules/HeroIcon'
import HeroMessages from '../molecules/HeroMessages'
import SocialMedia from '../molecules/SocialMedia'
import MarginTemplate from '../templates/MarginTemplate'

const Hero = () => {
  return (
    <Box pos="relative" overflow="hidden">
      <HeroMessages />
      <Image
        pos="absolute"
        w="150px"
        bottom="150"
        left="-20"
        zIndex="-1"
        src="./img/3d-cube.png"
        filter="drop-shadow(20px 30px 50px rgba(0, 0, 0, 0.25))"
        alt=""
      />
      <Filter top="150px" right="-20px" />
      <Image
        pos="absolute"
        w="150px"
        top="150"
        right="-20"
        zIndex="-1"
        src="./img/3d-diamond.png"
        filter="drop-shadow(20px 30px 50px rgba(0, 0, 0, 0.25))"
        alt=""
      />
      <MarginTemplate pt="5rem">
        <Stack align="center" spacing="3rem">
          <HeroIcon />
          <Stack align="center" spacing="1.5rem">
            <Text fontSize="1.25rem">Hi, I'm Pedro Cruz</Text>
            <Title>Building apps, growing businesses and experiences</Title>
            <Button bgColor="portfolio.blue" size="lg" color="portfolio.white">
              Check out my work!
            </Button>
          </Stack>
          <SocialMedia />
        </Stack>
      </MarginTemplate>
    </Box>
  )
}

export default Hero
