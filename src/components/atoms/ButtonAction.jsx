import { Button } from '@chakra-ui/button'

const ButtonAction = ({ children, ...rest }) => {
  return (
    <Button bgColor="portfolio.blue" color="portfolio.white" {...rest}>
      {children}
    </Button>
  )
}

export default ButtonAction
