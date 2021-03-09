import { useState } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import Burger from '../atoms/Burger'
import Overlay from '../atoms/Overlay'
import Navbar from '../molecules/Navbar'
import Logo from '../molecules/Logo'
import MarginTemplate from '../templates/MarginTemplate'

const Header = () => {
  const [menuState, setMenuState] = useState(false)

  /* --------------- CLOSE SIDEBAR AND REMOVE OVERLAY ---------------*/
  const handleOverlay = () => {
    setMenuState((prevState) => !prevState)
  }

  return (
    <Box as="section">
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
          <Navbar menuState={menuState} />
        </HStack>
      </MarginTemplate>
    </Box>
  )
}

export default Header
