import { ConfigProvider, Grid, Layout, Space, theme, Typography } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import NavBar from "./components/NavBar";
import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import WatchProviderSelector from "./components/WatchProviderSelector";
import SortSelector from "./components/SortSelector";
import { useMovies } from "./hooks/useMovies";
import MovieHeading from "./components/MovieHeading";
import GenreSelector from "./components/GenreSelector";
import PageFooter from "./components/PageFooter";
import Pagination from "./components/Pagination";
import YearSelector from "./components/YearSelector";
import MobileSearch from "./components/MobileSearch";

const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileSearchIsActive, setMobileSearchIsActive] = useState(false);
  const { data, isLoading } = useMovies();
  const customStyle = { backgroundColor: darkMode ? "#0d253f" : "#fff" };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#15B7DB",
        },
        algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout>
        <Header
          style={{
            ...customStyle,
            padding: `${screens.lg ? "0 50px" : "0 20px"}`,
          }}
        >
          {mobileSearchIsActive && !screens.md && (
            <MobileSearch
              isLoading={isLoading}
              setMobileSearchActive={(isActive) =>
                setMobileSearchIsActive(isActive)
              }
            />
          )}
          {(!mobileSearchIsActive || screens.md) && (
            <NavBar
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode(!darkMode)}
              loading={isLoading}
              onActiveSearch={() => setMobileSearchIsActive(true)}
            />
          )}
        </Header>
        <Layout>
          <Sider
            style={{
              ...customStyle,
              padding: "1rem",
              display: `${screens.lg ? "block" : "none"}`,
            }}
            trigger={null}
            width="200px"
          >
            <Typography.Title
              level={3}
              style={{ margin: "0 0 15px 20px", color: "#15B7DB" }}
            >
              Genres
            </Typography.Title>
            <GenreList />
          </Sider>
          <Content
            style={{
              ...customStyle,
              padding: "24px 24px 0 24px",
              textAlign: `${screens.lg ? "left" : "center"}`,
            }}
          >
            <MovieHeading />
            <Space
              size="large"
              direction={screens.sm ? "horizontal" : "vertical"}
              style={{
                margin: "20px 0",
                width: "100%",
                justifyContent: `${screens.lg ? "left" : "center"}`,
              }}
            >
              <WatchProviderSelector />
              {screens.lg ? null : <GenreSelector />}
              <SortSelector />
              <YearSelector />
            </Space>
            <MovieGrid loading={isLoading} movies={data?.results} />
          </Content>
        </Layout>
        <Layout style={{ ...customStyle }}>
          <Pagination isLoading={isLoading} totalItems={data?.total_results} />
        </Layout>
        <PageFooter />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
