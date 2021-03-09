import { TiBrush } from 'react-icons/ti'
import { RiMacbookLine } from 'react-icons/ri'
import { GoSearch } from 'react-icons/go'
import { Stack } from '@chakra-ui/layout'
import ServiceBox from '../molecules/ServiceBox'

const ServiceCard = () => {
  return (
    <Stack spacing="5rem" direction={['column', 'row']}>
      <ServiceBox
        icon={TiBrush}
        color="portfolio.lightRed"
        title="Design"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero rerum odio delectus vitae odit, sit minima autem doloremque, maiores quos unde"
      />
      <ServiceBox
        icon={RiMacbookLine}
        color="portfolio.lightOrange"
        title="Web Development"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero rerum odio delectus vitae odit, sit minima autem doloremque, maiores quos unde"
      />
      <ServiceBox
        icon={GoSearch}
        color="portfolio.lightPurple"
        title="SEO"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero rerum odio delectus vitae odit, sit minima autem doloremque, maiores quos unde"
      />
    </Stack>
  )
}

export default ServiceCard
