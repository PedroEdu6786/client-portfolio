import TextVariant from '../atoms/TextVariant'
import Title from '../atoms/Title'

const NewsletterContent = () => {
  return (
    <Title maxW="800px">
      Join Our newsletter to get exclusive <TextVariant>discounts</TextVariant>{' '}
      and <TextVariant>giveaways</TextVariant>
    </Title>
  )
}

export default NewsletterContent
