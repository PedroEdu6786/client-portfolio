import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Heading, Stack, Text } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import HeroIcon from '../molecules/HeroIcon'
import HeroMessages from '../molecules/HeroMessages'
import SocialMedia from '../molecules/SocialMedia'
import MarginTemplate from '../templates/MarginTemplate'

const Filter = styled.span`
  position: absolute;
  width: 150px;
  height: 150px;
  mix-blend-mode: hue;
  background: blue;
  top: 150px;
  right: -20px;
  z-index: 0;
`

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
      {/* <Box
        bgColor="portfolio.blue"
        pos="absolute"
        w="150px"
        h="150px"
        top="150"
        right="-20"
        zIndex="0"
      ></Box> */}
      <Filter></Filter>
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
            <Heading size="lg" align="center">
              Building apps, growing bussinesses and experiences
            </Heading>
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
