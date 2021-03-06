import { Box, Heading } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import TextMessage from './TextMessage'

const HeroMessages = () => {
  return (
    <Box display={{ base: 'none', md: 'block' }}>
      <TextMessage right={{ base: '0', lg: 50 }} top="0">
        <Text fontWeight="600" color="portfolio.darkGray" size="md">
          Freelance
        </Text>
        <Heading as="h3" size="lg">
          Web Developer
        </Heading>
      </TextMessage>
      <TextMessage
        w="300px"
        left={{ base: '0', lg: 50 }}
        top="120"
        transition={{ delay: 0.2 }}
      >
        <Text fontWeight="600" size="md">
          What makes me different?
        </Text>
        <Text fontSize=".9rem" as="h3" size="lg">
          Creative ideas, experienced, software background and multiple
          recognitions by professionals
        </Text>
      </TextMessage>
    </Box>
  )
}

export default HeroMessages
