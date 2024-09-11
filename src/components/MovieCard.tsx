import { Card, Image } from "antd";

const { Meta } = Card;

import { Movie } from "../types/Movie";
import VoteScore from "./VoteScore";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  movie: Movie;
}

const StyledLink = styled(Link)`
  &&& {
    font-size: 16px;
    color: inherit;

    &:hover {
      color: #15b7db;
    }
  }
`;

export const MovieCard = ({ movie }: Props) => {
  return (
    <Card
      hoverable
      cover={
        <Image
          preview={false}
          height={300}
          alt={movie.title}
          src={
            movie.poster_path
              ? `${import.meta.env.VITE_APP_API_IMAGES_BASE_URL}/w400/${
                  movie.poster_path
                }`
              : "/placeholder.jpg"
          }
        />
      }
    >
      <Meta
        title={
          <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
        }
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
