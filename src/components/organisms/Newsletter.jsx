import {
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
import SectionTemplate from '../templates/SectionTemplate'

const Newsletter = () => {
  return (
    <SectionTemplate pb="25rem" overflow="hidden" pos="relative">
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
      <Wireframes />
    </SectionTemplate>
  )
}

export default Newsletter
