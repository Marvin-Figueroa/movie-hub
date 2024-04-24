import { Layout } from 'antd'
import { Header, Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'

function App() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ backgroundColor: 'tomato' }}>Header</Header>
      <Layout>
        <Sider
          trigger={null}
          breakpoint='sm'
          collapsedWidth={0}
          width='25%'
          style={{ backgroundColor: 'gold' }}>
          Sider
        </Sider>
        <Content style={{ backgroundColor: 'royalblue' }}>Content</Content>
      </Layout>
    </Layout>
  )
}

export default App

