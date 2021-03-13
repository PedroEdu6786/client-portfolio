import { Heading, Text } from '@chakra-ui/layout'
import { MotionStack } from '../../motion/motionComponents'
import ReactIcon from '../atoms/ReactIcon'

const ServiceBox = ({ icon, title, description, color }) => {
  return (
    <MotionStack>
      <ReactIcon icon={icon} color={color} />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>
    </MotionStack>
  )
}

export default ServiceBox
