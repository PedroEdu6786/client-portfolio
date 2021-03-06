import { Stack } from '@chakra-ui/react'
import { MotionBox, MotionHeading } from '../../motion/motionComponents'
import { spring, menuItem } from '../../motion/motionVariants'

const MenuItem = ({ children, isSelected, setSelected }) => {
  return (
    <Stack
      direction={{ base: 'row-reverse', md: 'column' }}
      alignItems="center"
      justifyContent={{ base: 'flex-end', md: 'flex-start' }}
      spacing={{ base: '.5rem', md: '.25rem' }}
    >
      <MotionHeading
        cursor="pointer"
        fontWeight="600"
        fontSize="1.125rem"
        color={
          isSelected
            ? { base: 'portfolio.white', md: 'portfolio.black' }
            : { base: 'portfolio.lightBlue', md: 'portfolio.darkGray' }
        }
        variants={menuItem}
        transition={spring}
        animate={isSelected && screen.width < 768 ? 'side' : 'hide'}
        onClick={setSelected}
      >
        {children}
      </MotionHeading>
      {isSelected && (
        <MotionBox
          layoutId="menuItem"
          bgColor={{ base: 'portfolio.white', md: 'portfolio.blue' }}
          borderRadius="300px"
          w="10px"
          h="10px"
          initial={false}
          transition={spring}
        ></MotionBox>
      )}
    </Stack>
  )
}

export default MenuItem
