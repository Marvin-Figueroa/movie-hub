import { Flex, Image } from 'antd'
import logo from '../assets/movie-database-logo.svg'

const NavBar = () => {
  return (
    <Flex>
      <Image width={150} src={logo} />
    </Flex>
  )
}

export default NavBar
