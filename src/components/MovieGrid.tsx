import { Col, Row, Typography } from "antd";
import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "./MovieCard";
import { MovieCardSkeleton } from "./MovieCardSkeleton";

const { Text } = Typography;

const skeletons = [1, 2, 3, 4, 5, 6];

const MovieGrid = () => {
  const { data: movies, error, loading } = useMovies();

  return (
    <>
      {error && <Text type="danger">{error}</Text>}

      <Row justify="start" gutter={[32, 32]}>
        {loading &&
          skeletons.map((skeleton) => (
            <Col xs={24} md={12} xl={8} xxl={6} key={skeleton}>
              <MovieCardSkeleton />
            </Col>
          ))}
        {movies.map((movie) => (
          <Col xs={24} md={12} xl={8} xxl={6} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MovieGrid;
