import { Box } from '@chakra-ui/layout'
import Model from '../atoms/Model'

const HeroIcon = () => {
  return (
    <Box
      bgColor="portfolio.blue"
      w="200px"
      h="200px"
      borderRadius="50%"
      filter="drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1))"
      overflow="hidden"
    >
      <Box mt="1rem" w="200px" h="200px">
        <Model />
      </Box>
    </Box>
  )
}

export default HeroIcon
