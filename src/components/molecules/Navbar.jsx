import { useState } from 'react'
import { Box, Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { AnimateSharedLayout } from 'framer-motion'
import MenuItem from '../atoms/MenuItem'

const Nav = styled(Box)`
  @media screen and (max-width: 767px) {
    position: fixed;
    width: 80%;
    height: 100%;
    padding: 2rem;
    transition: 0.5s cubic-bezier(0.74, 0.14, 0.4, 0.96);
  }
`
const Navbar = ({ menuState }) => {
  const [selected, setSelected] = useState('Home')

  const items = ['Home', 'Projects', 'Services', 'Contact']

  return (
    <Nav
      as="nav"
      top={0}
      right={menuState ? 0 : '-100%'}
      bgColor={{ base: 'portfolio.blue', md: 'portfolio.gray' }}
    >
      <Stack
        mt={{ base: '4rem', md: '0' }}
        mx="3rem"
        spacing={{ base: '2rem', md: '1rem' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <AnimateSharedLayout>
          {items.map((item) => (
            <MenuItem
              key={item}
              isSelected={selected === item}
              setSelected={() => setSelected(item)}
            >
              {item}
            </MenuItem>
          ))}
        </AnimateSharedLayout>
      </Stack>
    </Nav>
  )
}

export default Navbar
