import { Stack } from '@chakra-ui/react'
import MarginTemplate from '../templates/MarginTemplate'
import Wireframes from '../atoms/Wireframes'
import SectionTemplate from '../templates/SectionTemplate'
import NewsletterForm from '../molecules/NewsletterForm'
import NewsletterContent from '../molecules/NewsletterContent'

const Newsletter = () => {
  return (
    <SectionTemplate pb="25rem" overflow="hidden" pos="relative">
      <MarginTemplate>
        <Stack spacing="3rem">
          <NewsletterContent />
          <NewsletterForm />
        </Stack>
      </MarginTemplate>
      <Wireframes />
    </SectionTemplate>
  )
}

export default Newsletter
