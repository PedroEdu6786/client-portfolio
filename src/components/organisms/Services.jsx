import SectionTemplate from '../templates/SectionTemplate'
import ServicesProps from '../molecules/ServicesProps'
import ServicesContent from '../molecules/ServicesContent'

const Services = () => {
  return (
    <SectionTemplate pos="relative" overflow="hidden" id="services">
      <ServicesProps />
      <ServicesContent />
    </SectionTemplate>
  )
}

export default Services
