import { Heading } from '@chakra-ui/layout'

const TitleCarousel = ({ children, ...rest }) => {
  return (
    <Heading as="h2" fontSize="5rem" color="portfolio.lightGray" {...rest}>
      {children}
    </Heading>
  )
}

export default TitleCarousel
