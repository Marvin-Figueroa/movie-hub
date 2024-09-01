import {
  Button,
  ConfigProvider,
  DatePicker,
  Flex,
  Grid,
  Input,
  Layout,
  Pagination,
  Space,
  theme,
  Typography,
} from "antd";
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
import GenreSelector from "./components/GenreSelector";
import { ArrowLeftOutlined } from "@ant-design/icons";
import PageFooter from "./components/PageFooter";
import styled from "styled-components";

const { Search } = Input;

const { defaultAlgorithm, darkAlgorithm } = theme;

const CustomSpace = styled(Space)`
  justify-content: center;
  margin: 3rem auto;
  width: 100%;
`;

export interface MovieQuery {
  with_genres?: number;
  with_watch_providers?: number;
  sort_by?: string;
  primary_release_year?: number;
  query?: string;
  page?: number;
}

function App() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileSearchIsActive, setMobileSearchIsActive] = useState(false);
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);
  const { data, isLoading } = useMovies(movieQuery);
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
            <Flex
              justify="center"
              gap="15px"
              align="center"
              style={{ height: "64px" }}
            >
              <Button
                size="large"
                onClick={() => setMobileSearchIsActive(false)}
                icon={<ArrowLeftOutlined />}
              />
              <Search
                placeholder="Search movies by title..."
                onSearch={(searchText: string) =>
                  setMovieQuery({
                    query: searchText,
                    page: 1,
                  })
                }
                size="large"
                allowClear
                loading={isLoading}
                style={{
                  maxWidth: 400,
                }}
              />
            </Flex>
          )}
          {(!mobileSearchIsActive || screens.md) && (
            <NavBar
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode(!darkMode)}
              loading={isLoading}
              onSearch={(searchText: string) =>
                setMovieQuery({
                  query: searchText,
                  page: 1,
                })
              }
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
            <GenreList
              onSelectGenre={(genre: number) =>
                setMovieQuery({
                  ...movieQuery,
                  with_genres: genre,
                  page: 1,
                })
              }
              selectedGenre={movieQuery.with_genres}
            />
          </Sider>
          <Content
            style={{
              ...customStyle,
              padding: "24px 24px 0 24px",
              textAlign: `${screens.lg ? "left" : "center"}`,
            }}
          >
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
                    page: 1,
                  })
                }
                selectedWatchProvider={movieQuery.with_watch_providers}
              />
              {screens.lg ? null : (
                <GenreSelector
                  onSelectGenre={(genre: number) =>
                    setMovieQuery({
                      ...movieQuery,
                      with_genres: genre,
                      page: 1,
                    })
                  }
                  selectedGenre={movieQuery.with_genres}
                />
              )}
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
                    page: 1,
                  })
                }
                picker="year"
                style={{
                  width: "100%",
                }}
                placeholder="Filter by year..."
              />
            </Space>
            <MovieGrid loading={isLoading} movies={data?.results} />
          </Content>
        </Layout>
        <Layout style={{ ...customStyle }}>
          <CustomSpace>
            <Pagination
              disabled={isLoading}
              showSizeChanger={false}
              current={movieQuery.page || 1}
              // Max 'page' value allowed in API is 500
              // Default page size is 20 (cannot be changed, API does not support custom values )
              // 10,000 items, 20 per page gives you the max 0f 500 pages
              total={Math.min(
                isLoading ? 10_000 : data ? data.total_results : 0,
                10_000
              )}
              defaultPageSize={20}
              onChange={(newPage) =>
                setMovieQuery({ ...movieQuery, page: newPage })
              }
            />
          </CustomSpace>
        </Layout>

        <PageFooter />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
