import styled from "styled-components";
import { Typography } from "antd";

import genres from "../data/genres";
import watchProviders from "../data/providers";
import { MovieQuery } from "../App";

interface Props {
  movieQuery: MovieQuery;
}

const CustomTitle = styled(Typography.Title)`
  && {
    margin: 0;
    color: #15b7db;
  }
`;

const MovieHeading = ({ movieQuery }: Props) => {
  const selectedGenre = genres.find((g) => g.id === movieQuery.with_genres);
  const selectedProvider = watchProviders.find(
    (provider) => provider.provider_id === movieQuery.with_watch_providers
  );

  const watchProvider = selectedProvider?.provider_name
    ? selectedProvider.provider_name + " - "
    : "";

  const genre = selectedGenre?.name ? selectedGenre.name + " - " : "";

  return (
    <CustomTitle level={2}>{watchProvider + genre + "Movies"}</CustomTitle>
  );
};

export default MovieHeading;
