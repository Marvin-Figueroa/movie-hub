import { ConfigProvider, Layout, theme } from 'antd'
import { Header, Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import NavBar from './components/NavBar'
import { useState } from 'react'

const { defaultAlgorithm, darkAlgorithm } = theme

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const customStyle = { backgroundColor: darkMode ? '#0d253f' : '#fff' }

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? darkAlgorithm : defaultAlgorithm
      }}>
      <Layout style={{ height: '100vh' }}>
        <Header style={customStyle}>
          <NavBar
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />
        </Header>
        <Layout>
          <Sider
            style={customStyle}
            trigger={null}
            breakpoint='sm'
            collapsedWidth={0}
            width='25%'>
            Sider
          </Sider>
          <Content style={customStyle}>Content</Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App

