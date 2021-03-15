import { TiBrush } from 'react-icons/ti'
import { RiMacbookLine } from 'react-icons/ri'
import { GoSearch } from 'react-icons/go'
import { Stack } from '@chakra-ui/layout'
import ServiceBox from '../molecules/ServiceBox'

const ServiceCard = () => {
  return (
    <Stack spacing="5rem" direction={{ base: 'column', md: 'row' }}>
      <ServiceBox
        flex="1"
        icon={TiBrush}
        color="portfolio.lightRed"
        title="Design"
        description="Looking for an amazing design that will amaze you and your clients? Let's make your ideas into reality! We perform web design, including mobile, tablet and desktop views"
      />
      <ServiceBox
        flex="1"
        icon={RiMacbookLine}
        color="portfolio.lightOrange"
        title="Web Development"
        description="Let's make your design a reality and increase your web presence! We develop your web or mobile app. Build blogs, ecommerce, landing pages, mobile apps and more!"
      />
      <ServiceBox
        flex="1"
        icon={GoSearch}
        color="portfolio.lightPurple"
        title="SEO"
        description="Grow leads and increase your reach to potential new clients. Improve your web and media presence by numerous Search Engine Optimization techniques so it's easier to find you on the web"
      />
    </Stack>
  )
}

export default ServiceCard
