import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'
import MarginTemplate from '../templates/MarginTemplate'
import Title from '../atoms/Title'
import TextVariant from '../atoms/TextVariant'
import Wireframes from '../atoms/Wireframes'

const Newsletter = () => {
  return (
    <Box mt="10rem">
      <MarginTemplate>
        <Stack spacing="3rem">
          <Title>
            Join Our newsletter to get exclusive{' '}
            <TextVariant>discounts</TextVariant> and{' '}
            <TextVariant>giveaways</TextVariant>
          </Title>
          <InputGroup size="lg">
            <Input
              type="email"
              variant="filled"
              placeholder="Enter your email"
              bgColor="portfolio.white"
              color="portfolio.black"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            />
            <InputRightElement w="7rem">
              <Button
                size="md"
                bgColor="portfolio.blue"
                color="portfolio.white"
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </MarginTemplate>
      <Wireframes top="0" />
    </Box>
  )
}

export default Newsletter
