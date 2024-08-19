import { Col, Row } from "antd";
import { Movie } from "../hooks/useMovies";
import { MovieCard } from "./MovieCard";
import { MovieCardSkeleton } from "./MovieCardSkeleton";

interface Props {
  movies: Movie[];
  loading: boolean;
}

const skeletons = [1, 2, 3, 4, 5, 6];

const MovieGrid = ({ movies, loading }: Props) => {
  return (
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
  );
};

export default MovieGrid;
