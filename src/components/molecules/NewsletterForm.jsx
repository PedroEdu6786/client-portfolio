import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import ButtonAction from '../atoms/ButtonAction'

const NewsletterForm = () => {
  return (
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
        <ButtonAction size="md">Subscribe</ButtonAction>
      </InputRightElement>
    </InputGroup>
  )
}

export default NewsletterForm
