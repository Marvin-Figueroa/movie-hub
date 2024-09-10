import { Col, Row } from "antd";
import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "./MovieCard";
import { MovieCardSkeleton } from "./MovieCardSkeleton";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

const MovieGrid = () => {
  const { data, isLoading } = useMovies();

  return (
    <Row justify="start" gutter={[32, 32]}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <Col xs={24} sm={12} md={8} xl={6} xxl={4} key={skeleton}>
            <MovieCardSkeleton />
          </Col>
        ))}
      {data?.results?.map((movie) => (
        <Col xs={24} sm={12} md={8} xl={6} xxl={4} key={movie.id}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieGrid;
