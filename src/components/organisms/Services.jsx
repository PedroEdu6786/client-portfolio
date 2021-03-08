import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import { TiBrush } from 'react-icons/ti'
import { RiMacbookLine } from 'react-icons/ri'
import { GoSearch } from 'react-icons/go'
import ServiceBox from '../molecules/ServiceBox'
import MarginTemplate from '../templates/MarginTemplate'
import { Filter } from '../atoms/Filter'

const Services = () => {
  return (
    <Box mt="5rem" pos="relative" overflow="hidden">
      <Filter top="0" right="-50px" />
      <Image
        src="/img/3d-ring.png"
        pos="absolute"
        w="150px"
        zIndex="-1"
        top="0"
        right="-50px"
      />
      <Filter bottom="0" left="-50px" />
      <Image
        src="/img/3d-pill.png"
        pos="absolute"
        w="150px"
        zIndex="-1"
        bottom="0"
        left="-50px"
      />
      <MarginTemplate pt="5rem" pb="15rem">
        <Stack spacing="8rem">
          <Heading align="center">Check out my awesome Services</Heading>
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
        </Stack>
      </MarginTemplate>
    </Box>
  )
}

export default Services
