import { Heading, Stack, Text } from '@chakra-ui/layout'
import ReactIcon from '../atoms/ReactIcon'

const ServiceBox = ({ icon, title, description, color }) => {
  return (
    <Stack>
      <ReactIcon icon={icon} color={color} />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Stack>
  )
}

export default ServiceBox
