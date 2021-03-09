import { Box, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import SocialMedia from '../molecules/SocialMedia'
import MarginTemplate from '../templates/MarginTemplate'

const Footer = () => {
  return (
    <Box w="100%" bgColor="portfolio.black" overflow="hidden">
      <MarginTemplate>
        <Stack
          align="center"
          color="portfolio.white"
          py="5rem"
          fontWeight="bold"
          fontSize="1.2rem"
          spacing="6rem"
        >
          <Box align="center">
            <Text>Liking what you see?</Text>
            <Link color="portfolio.blue" href="mailto:cruzeduardo029@gmail.com">
              Contact me
            </Link>
          </Box>
          <Link href="mailto:cruzeduardo029@gmail.com">
            <Heading as="h2" size="md" display="inline-block">
              cruzeduardo029@gmail.com
            </Heading>
          </Link>
          <SocialMedia />
        </Stack>
      </MarginTemplate>
    </Box>
  )
}

export default Footer
