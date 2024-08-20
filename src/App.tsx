import { ConfigProvider, DatePicker, Grid, Layout, Space, theme } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import NavBar from "./components/NavBar";
import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import WatchProviderSelector from "./components/WatchProviderSelector";
import SortSelector from "./components/SortSelector";
import { useMovies } from "./hooks/useMovies";
import dayjs from "dayjs";
import MovieHeading from "./components/MovieHeading";

const { defaultAlgorithm, darkAlgorithm } = theme;

export interface MovieQuery {
  with_genres?: number;
  with_watch_providers?: number;
  sort_by?: string;
  primary_release_year?: number;
  query?: string;
}

function App() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const [darkMode, setDarkMode] = useState(false);
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);
  const { data: movies, loading } = useMovies(movieQuery);
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
            loading={loading}
            onSearch={(searchText: string) =>
              setMovieQuery({
                query: searchText,
              })
            }
          />
        </Header>
        <Layout>
          <Sider
            style={{ ...customStyle, padding: "1rem" }}
            trigger={null}
            breakpoint="md"
            collapsedWidth={0}
            width="25%"
          >
            <GenreList
              onSelectGenre={(genre: number) =>
                setMovieQuery({
                  ...movieQuery,
                  with_genres: genre,
                })
              }
              selectedGenre={movieQuery.with_genres}
            />
          </Sider>
          <Content style={{ ...customStyle, padding: "24px" }}>
            <MovieHeading movieQuery={movieQuery} />
            <Space
              size="large"
              direction={screens.sm ? "horizontal" : "vertical"}
              style={{
                margin: "20px 0",
                width: "100%",
                justifyContent: `${screens.lg ? "left" : "center"}`,
              }}
            >
              <WatchProviderSelector
                onSelectWatchProvider={(watchProvider: number) =>
                  setMovieQuery({
                    ...movieQuery,
                    with_watch_providers: watchProvider,
                  })
                }
                selectedWatchProvider={movieQuery.with_watch_providers}
              />
              <SortSelector
                onSelectSort={(sort: string) =>
                  setMovieQuery({
                    ...movieQuery,
                    sort_by: sort,
                  })
                }
                selectedSort={movieQuery.sort_by}
              />
              <DatePicker
                value={
                  movieQuery.primary_release_year
                    ? dayjs().year(movieQuery.primary_release_year)
                    : null
                }
                onChange={(date) =>
                  setMovieQuery({
                    ...movieQuery,
                    primary_release_year: date?.year(),
                  })
                }
                picker="year"
                style={{
                  width: "100%",
                }}
                placeholder="Filter by year..."
              />
            </Space>
            <MovieGrid loading={loading} movies={movies} />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
