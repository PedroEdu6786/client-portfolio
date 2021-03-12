import { MotionStack, MotionText } from '../../motion/motionComponents'
import ButtonAction from '../atoms/ButtonAction'
import Title from '../atoms/Title'

const HeroHeadline = () => {
  return (
    <MotionStack
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      align="center"
      spacing="1.5rem"
      maxW="50vh"
      px="2rem"
    >
      <MotionText fontSize={{ base: '1.25rem', md: '2.5vh' }}>
        Hi, I'm Pedro Cruz
      </MotionText>
      <Title fontSize={{ base: '1.5rem', md: '3vh' }}>
        Building apps, growing businesses and experiences
      </Title>
      <ButtonAction size="lg">Check out my work!</ButtonAction>
    </MotionStack>
  )
}

export default HeroHeadline
