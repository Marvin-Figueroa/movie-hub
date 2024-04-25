import { MoonFilled, SunFilled } from '@ant-design/icons'
import { Flex, Switch } from 'antd'

interface Props {
  darkMode: boolean
  toggleDarkMode: () => void
}

const iconStyle = { fontSize: '20px', color: '#90cea1' }

const ColorModeSwitch = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <Flex gap='middle'>
      <Switch
        style={{ backgroundColor: darkMode ? '#90cea1' : '#ddd' }}
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      {darkMode ? (
        <MoonFilled style={iconStyle} />
      ) : (
        <SunFilled style={iconStyle} />
      )}
    </Flex>
  )
}

export default ColorModeSwitch
