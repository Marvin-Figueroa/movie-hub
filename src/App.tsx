import { ConfigProvider, Layout, theme } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import NavBar from "./components/NavBar";
import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";

const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const customStyle = { backgroundColor: darkMode ? "#0d253f" : "#fff" };

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout>
        <Header style={customStyle}>
          <NavBar
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />
        </Header>
        <Layout>
          <Sider
            style={{ ...customStyle, padding: "1rem" }}
            trigger={null}
            breakpoint="sm"
            collapsedWidth={0}
            width="25%"
          >
            <GenreList />
          </Sider>
          <Content style={{ ...customStyle, padding: "24px" }}>
            <MovieGrid />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
