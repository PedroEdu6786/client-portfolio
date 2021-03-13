import { Box, Link, Text } from '@chakra-ui/layout'
import TextVariant from '../atoms/TextVariant'

const ProjectsFooter = () => {
  return (
    <Box align="center" mt="5rem">
      <Text fontWeight="bold" fontSize="1.3rem">
        Liking What you see?{' '}
        <TextVariant>
          <Link href="mailto:cruzeduardo029@gmail.com">Contact Me</Link>
        </TextVariant>
      </Text>
    </Box>
  )
}

export default ProjectsFooter
