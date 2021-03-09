import { Stack } from '@chakra-ui/layout'
import Title from '../atoms/Title'
import MarginTemplate from '../templates/MarginTemplate'
import ServiceCollection from './ServiceCollection'

const ServicesContent = () => {
  return (
    <MarginTemplate pt="5rem" pb="15rem">
      <Stack spacing="8rem">
        <Title>Check out my awesome Services</Title>
        <ServiceCollection />
      </Stack>
    </MarginTemplate>
  )
}

export default ServicesContent
