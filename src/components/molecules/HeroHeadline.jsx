import { Stack, Text } from '@chakra-ui/layout'
import ButtonAction from '../atoms/ButtonAction'
import Title from '../atoms/Title'

const HeroHeadline = () => {
  return (
    <Stack align="center" spacing="1.5rem">
      <Text fontSize="1.25rem">Hi, I'm Pedro Cruz</Text>
      <Title fontSize="1.5rem">
        Building apps, growing businesses and experiences
      </Title>
      <ButtonAction size="lg">Check out my work!</ButtonAction>
    </Stack>
  )
}

export default HeroHeadline
