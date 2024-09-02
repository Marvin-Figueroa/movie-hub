import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { MovieQuery } from "../App";
import APIClient from "../services/apiClient";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
}

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

dayjs.extend(duration);

export const useMovies = (movieQuery: MovieQuery) => {
  const apiClient = new APIClient<FetchMoviesResponse>(
    `${movieQuery.query ? "/search/movie" : "/discover/movie"}`
  );

  return useQuery<FetchMoviesResponse, Error>({
    queryKey: ["movies", movieQuery ? movieQuery : null],
    queryFn: () =>
      apiClient.getAll({
        params: {
          with_genres:
            movieQuery.with_genres === -1 ? null : movieQuery.with_genres,
          watch_region: "US",
          sort_by: movieQuery.sort_by,
          with_watch_providers:
            movieQuery.with_watch_providers === -1
              ? null
              : movieQuery.with_watch_providers,
          primary_release_year: movieQuery.primary_release_year,
          query: movieQuery.query || null,
          page: movieQuery.page,
        },
      }),
    staleTime: dayjs.duration(1, "day").asMilliseconds(),
  });
};
