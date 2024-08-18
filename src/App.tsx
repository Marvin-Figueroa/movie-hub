import { ConfigProvider, Layout, Space, theme } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import NavBar from "./components/NavBar";
import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import WatchProviderSelector from "./components/WatchProviderSelector";

const { defaultAlgorithm, darkAlgorithm } = theme;

export interface MovieQuery {
  with_genres: number;
  with_watch_providers: number;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const customStyle = { backgroundColor: darkMode ? "#0d253f" : "#fff" };
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);

  const handleSelectGenre = (genre: number) =>
    setMovieQuery((prevMovieQuery) => ({
      ...prevMovieQuery,
      with_genres: genre,
    }));

  const handleSelectWatchProvider = (watchProvider: number) => {
    setMovieQuery((prevMovieQuery) => ({
      ...prevMovieQuery,
      with_watch_providers: watchProvider,
    }));
  };

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
            <GenreList
              onSelectGenre={handleSelectGenre}
              selectedGenre={movieQuery.with_genres}
            />
          </Sider>
          <Content style={{ ...customStyle, padding: "24px" }}>
            <Space size="large" style={{ marginBottom: "15px" }}>
              <WatchProviderSelector
                onSelectWatchProvider={handleSelectWatchProvider}
                selectedWatchProvider={movieQuery.with_watch_providers}
              />
            </Space>
            <MovieGrid movieQuery={movieQuery} />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
