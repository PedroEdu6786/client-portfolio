import { useState } from 'react'
import {
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'

const URL = '/api/newsletter'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  /*-------------- FORM INPUT HANDLER ON CHANGE -------------- */
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  /*-------------- FORM SUBMISSION HANDLER -------------- */
  const submitHandler = async () => {
    if (isValidSubmit()) {
      setLoading(true)
      let requestStatus = await subscriptionRequest()

      if (requestStatus.message === 'success') {
        displayToast({
          title: 'Verify Email',
          description:
            'Success! Check your email to complete your subscription',
          status: requestStatus.message,
        })
      } else {
        displayToast({
          title: 'Something went wrong',
          description:
            'Email subscription is not currently available, please try again later!',
          status: requestStatus.message,
        })
      }

      setLoading(false)
    } else {
      displayToast({
        title: 'Empty Inputs',
        description: 'Fill empty inputs',
        status: 'warning',
      })
    }
  }

  /*-------------- REQUEST TO /api/newsletter -------------- */
  const subscriptionRequest = async () => {
    let requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }
    let response = await fetch(URL, requestBody)

    let data
    if (response.ok) {
      data = await response.json()
    } else {
      data = { message: 'error' }
    }

    return data
  }

  /*-------------- DISPLAY TOAST MESSAGE -------------- */
  const displayToast = (data) => {
    toast({
      title: data.title,
      description: data.description,
      status: data.status,
      duration: 5000,
      isClosable: true,
    })
  }

  /*-------------- VALIDATE EMAIL -------------- */
  const isValidSubmit = () => {
    let isValidInput = email.split(' ').join('') !== ''
    if (!isValidInput) return false

    return true
  }

  return (
    <FormControl id="email" pos="relative" zIndex="0" maxW="800px" isRequired>
      <InputGroup size="lg">
        <Input
          type="email"
          variant="filled"
          placeholder="Enter your email"
          bgColor="portfolio.white"
          color="portfolio.black"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
          value={email}
          onChange={handleEmail}
        />
        <InputRightElement w="7rem">
          <ButtonAction type="submit" size="md" onClick={submitHandler}>
            {loading ? <Spinner /> : 'Subscribe'}
          </ButtonAction>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}

export default NewsletterForm
