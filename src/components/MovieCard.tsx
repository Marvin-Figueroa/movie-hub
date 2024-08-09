import { Card } from "antd";

const { Meta } = Card;

import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={movie.title}
          src={`${import.meta.env.VITE_APP_API_IMAGES_BASE_URL}/w400/${
            movie.poster_path
          }`}
        />
      }
    >
      <Meta title={movie.title} description={movie.release_date} />
    </Card>
  );
};
