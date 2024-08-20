import { Card } from "antd";

const { Meta } = Card;

import { Movie } from "../hooks/useMovies";
import VoteScore from "./VoteScore";

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
          src={
            movie.poster_path
              ? `${import.meta.env.VITE_APP_API_IMAGES_BASE_URL}/w400/${
                  movie.poster_path
                }`
              : "/placeholder.jpg"
          }
          style={{
            height: "400px",
            objectFit: "cover",
          }}
        />
      }
    >
      <Meta
        title={movie.title}
        description={
          <>
            <p>{movie.release_date || "N/A"}</p>
            <VoteScore score={movie.vote_average} />
          </>
        }
      />
    </Card>
  );
};
