import { useState, useEffect } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import Burger from '../atoms/Burger'
import Overlay from '../atoms/Overlay'
import Navbar from '../molecules/Navbar'
import Logo from '../molecules/Logo'
import MarginTemplate from '../templates/MarginTemplate'
import { MotionBox } from '../../motion/motionComponents'

const Header = () => {
  const [menuState, setMenuState] = useState(false)
  const [screenOffset, setScreenOffset] = useState(0)

  useEffect(() => {
    document.addEventListener('scroll', () =>
      setScreenOffset(window.pageYOffset)
    )
  }, [])

  /* --------------- CLOSE SIDEBAR AND REMOVE OVERLAY ---------------*/
  const handleOverlay = () => {
    setMenuState((prevState) => !prevState)
  }

  return (
    <MotionBox
      bgColor={screenOffset > 0 && 'portfolio.gray'}
      w="100%"
      h="5rem"
      pos="fixed"
      zIndex="1"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
    >
      <Box as="section" mx="auto" maxW="1400px" zIndex="10">
        {/* --------------- OVERLAY ---------------*/}
        <Box onClick={handleOverlay}>{menuState && <Overlay />}</Box>
        <MarginTemplate>
          <HStack
            h="5rem"
            pt="2rem"
            justifyContent="space-between"
            alignItems="flex-start"
            zIndex="10"
          >
            {/* --------------- LOGO ---------------*/}
            <Logo />
            {/* --------------- MENU ICON ---------------*/}
            <Burger
              display={{ base: 'flex', md: 'none' }}
              menuState={menuState}
              setMenuState={setMenuState}
            />

            {/* --------------- NAVBAR ---------------*/}
            <Navbar menuState={menuState} setMenuState={setMenuState} />
          </HStack>
        </MarginTemplate>
      </Box>
    </MotionBox>
  )
}

export default Header
