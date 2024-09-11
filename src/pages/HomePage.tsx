import { Layout, Typography, Space, Grid } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import GenreList from "../components/GenreList";
import GenreSelector from "../components/GenreSelector";
import MovieGrid from "../components/MovieGrid";
import MovieHeading from "../components/MovieHeading";
import SortSelector from "../components/SortSelector";
import WatchProviderSelector from "../components/WatchProviderSelector";
import YearSelector from "../components/YearSelector";
import useMovieQueryStore from "../store";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const darkMode = useMovieQueryStore((s) => s.darkMode);
  const customStyle = { backgroundColor: darkMode ? "#0d253f" : "#fff" };

  return (
    <>
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
          <MovieGrid />
        </Content>
      </Layout>
      <Layout style={{ ...customStyle }}>
        <Pagination />
      </Layout>
    </>
  );
};

export default HomePage;
