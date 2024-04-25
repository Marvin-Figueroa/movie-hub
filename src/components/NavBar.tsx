import { Flex, Image } from 'antd'
import logo from '../assets/movie-database-logo.svg'
import ColorModeSwitch from './ColorModeSwitch'

interface Props {
  darkMode: boolean
  toggleDarkMode: () => void
}

const NavBar = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <Flex justify='space-between' align='center'>
      <Image preview={false} width={150} src={logo} />
      <ColorModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </Flex>
  )
}

export default NavBar
