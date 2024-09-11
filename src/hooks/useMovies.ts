import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import APIClient from "../services/apiClient";
import useMovieQueryStore from "../store";
import { Movie } from "../types/Movie";

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

dayjs.extend(duration);

export const useMovies = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  const apiClient = new APIClient<FetchMoviesResponse>(
    `${movieQuery.search ? "/search/movie" : "/discover/movie"}`
  );

  return useQuery<FetchMoviesResponse, Error>({
    queryKey: ["movies", movieQuery ? movieQuery : null],
    queryFn: () =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.genre === -1 ? null : movieQuery.genre,
          watch_region: "US",
          sort_by: movieQuery.sort,
          with_watch_providers:
            movieQuery.watchProvider === -1 ? null : movieQuery.watchProvider,
          primary_release_year: movieQuery.year,
          query: movieQuery.search || null,
          page: movieQuery.page,
        },
      }),
    staleTime: dayjs.duration(1, "day").asMilliseconds(),
  });
};
