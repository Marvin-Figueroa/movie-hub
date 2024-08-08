import { Spin, Typography } from "antd";
import { useMovies } from "../hooks/useMovies";

const { Text } = Typography;

const MovieGrid = () => {
  const { movies, error, loading } = useMovies();

  return (
    <>
      {loading && <Spin size="large" />}
      {error && <Text type="danger">{error}</Text>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieGrid;
