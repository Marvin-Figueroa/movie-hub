import { MovieQuery } from "../App";
import { useData } from "./useData";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
}

export interface FetchMoviesResponse {
  page: number;
  results: Movie[];
}

export const useMovies = (movieQuery: MovieQuery) =>
  useData<FetchMoviesResponse, Movie>(
    "/discover/movie",
    (response) => response.results,
    {
      params: {
        ...movieQuery,
        with_watch_providers:
          movieQuery.with_watch_providers === -1
            ? null
            : movieQuery.with_watch_providers,
        watch_region: "US",
      },
    },
    [movieQuery.with_genres, movieQuery.with_watch_providers]
  );
