import { useState } from 'react'
import { HStack } from '@chakra-ui/react'
import Burger from '../atoms/Burger'
import Overlay from '../atoms/Overlay'
import Navbar from '../molecules/Navbar'
import Logo from '../molecules/Logo'
import MarginTemplate from '../templates/MarginTemplate'

const Header = () => {
  const [menuState, setMenuState] = useState(false)

  return (
    <>
      {/* --------------- OVERLAY ---------------*/}
      <Overlay isActive={menuState} setOverlay={setMenuState} />
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
    </>
  )
}

export default Header
