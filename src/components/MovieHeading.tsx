import styled from "styled-components";
import { Typography } from "antd";

import genres from "../data/genres";
import watchProviders from "../data/providers";
import useMovieQueryStore from "../store";

const CustomTitle = styled(Typography.Title)`
  && {
    margin: 0;
    color: #15b7db;
  }
`;

const MovieHeading = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);

  const selectedGenre = genres.find((g) => g.id === movieQuery.genre);
  const selectedProvider = watchProviders.find(
    (provider) => provider.provider_id === movieQuery.watchProvider
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
