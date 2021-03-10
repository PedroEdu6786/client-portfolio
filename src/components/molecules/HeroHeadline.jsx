import { Stack, Text } from '@chakra-ui/layout'
import ButtonAction from '../atoms/ButtonAction'
import Title from '../atoms/Title'

const HeroHeadline = () => {
  return (
    <Stack align="center" spacing="1.5rem" maxW="50vh">
      <Text fontSize={{ base: '1.25rem', md: '2.5vh' }}>
        Hi, I'm Pedro Cruz
      </Text>
      <Title fontSize={{ base: '1.5rem', md: '3vh' }}>
        Building apps, growing businesses and experiences
      </Title>
      <ButtonAction size="lg">Check out my work!</ButtonAction>
    </Stack>
  )
}

export default HeroHeadline
