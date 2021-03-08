import Icon from '@chakra-ui/icon'

const ReactIcon = ({ icon, ...rest }) => {
  return (
    <>
      <Icon as={icon} fontSize="2rem" {...rest} />
    </>
  )
}

export default ReactIcon
