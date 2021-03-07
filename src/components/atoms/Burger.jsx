import { chakra, Box, Stack } from '@chakra-ui/react'

const Bar = chakra(Box, {
  baseStyle: {
    borderRadius: '100px',
    h: '4px',
    transition: '.4s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  },
})

const Burger = ({ menuState, setMenuState, ...rest }) => {
  return (
    <Stack
      as="label"
      w="30px"
      cursor="pointer"
      spacing=".35rem"
      zIndex="110"
      htmlFor="check"
      onClick={() => setMenuState(!menuState)}
      {...rest}
    >
      <Bar
        w="50%"
        transformOrigin="bottom"
        bgColor={menuState ? 'portfolio.white' : 'portfolio.black'}
        transform={menuState ? 'rotatez(45deg) translate(5px,1px)' : 'none'}
        as="span"
      ></Bar>
      <Bar
        transformOrigin="top"
        bgColor={menuState ? 'portfolio.white' : 'portfolio.black'}
        transform={menuState ? 'rotatez(-45deg)' : 'none'}
        as="span"
      ></Bar>
      <Bar
        w={menuState ? '50%' : '75%'}
        transformOrigin="bottom"
        bgColor={menuState ? 'portfolio.white' : 'portfolio.black'}
        transform={menuState ? 'translate(14px,-5px) rotatez(45deg)' : 'none'}
        as="span"
      ></Bar>
    </Stack>
  )
}

export default Burger
