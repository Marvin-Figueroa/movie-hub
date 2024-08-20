import { Typography } from "antd";

import genres from "../data/genres";
import watchProviders from "../data/providers";
import { MovieQuery } from "../App";

interface Props {
  movieQuery: MovieQuery;
}

const MovieHeading = ({ movieQuery }: Props) => {
  const selectedGenre = genres.find((g) => g.id === movieQuery.with_genres);
  const selectedProvider = watchProviders.find(
    (provider) => provider.provider_id === movieQuery.with_watch_providers
  );

  return (
    <Typography.Title level={2} style={{ margin: 0, color: "#15B7DB" }}>
      {`${
        selectedProvider?.provider_name
          ? selectedProvider.provider_name + " - "
          : ""
      } ${selectedGenre?.name ? selectedGenre.name + " - " : ""} Movies`}
    </Typography.Title>
  );
};

export default MovieHeading;
