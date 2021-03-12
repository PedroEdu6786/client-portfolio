import { useState } from 'react'
import { Box, Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { AnimateSharedLayout } from 'framer-motion'
import MenuItem from '../atoms/MenuItem'
import Link from 'next/link'

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

  const items = [
    { section: 'Home', id: '#' },
    { section: 'Projects', id: '#projects' },
    { section: 'Services', id: '#services' },
    { section: 'Contact', id: '#contact' },
  ]

  return (
    <Nav
      as="nav"
      top={0}
      right={menuState ? 0 : '-100%'}
      bgColor={{ base: 'portfolio.blue', md: 'transparent' }}
      zIndex="101"
    >
      <Stack
        mt={{ base: '4rem', md: '0' }}
        mx={{ base: '3rem', md: '0' }}
        spacing={{ base: '2rem', md: '1rem' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <AnimateSharedLayout>
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.id}
              onClick={() => setMenuState(false)}
            >
              <a>
                <MenuItem
                  isSelected={selected === item.section}
                  setSelected={() => setSelected(item.section)}
                >
                  {item.section}
                </MenuItem>
              </a>
            </Link>
          ))}
        </AnimateSharedLayout>
      </Stack>
    </Nav>
  )
}

export default Navbar
