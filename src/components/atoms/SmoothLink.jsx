import { Link } from 'react-scroll'

const SmoothLink = ({ children, to = '/', ...rest }) => {
  return (
    <Link to={to} smooth={true} {...rest}>
      {children}
    </Link>
  )
}

export default SmoothLink
