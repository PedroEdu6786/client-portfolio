import { useState } from 'react'
import { Box, HStack, Stack } from '@chakra-ui/react'
import Burger from '../atoms/Burger'
import Overlay from '../atoms/Overlay'
import Navbar from '../molecules/Navbar'
import Logo from '../molecules/Logo'

const Header = () => {
  const [menuState, setMenuState] = useState(false)

  return (
    <>
      {/* --------------- OVERLAY ---------------*/}
      <Overlay isActive={menuState} setOverlay={setMenuState} />
      <Box mx="2rem">
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
      </Box>
    </>
  )
}

export default Header
