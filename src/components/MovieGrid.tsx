import { Col, Row, Spin, Typography } from "antd";
import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "./MovieCard";

const { Text } = Typography;

const MovieGrid = () => {
  const { movies, error, loading } = useMovies();

  return (
    <>
      {loading && <Spin size="large" />}
      {error && <Text type="danger">{error}</Text>}

      <Row justify="start" gutter={[32, 32]}>
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
