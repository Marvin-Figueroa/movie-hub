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
    movieQuery.query ? "/search/movie" : "/discover/movie",
    (response) => response.results,
    {
      params: {
        with_genres: movieQuery.with_genres,
        watch_region: "US",
        sort_by: movieQuery.sort_by,
        with_watch_providers:
          movieQuery.with_watch_providers === -1
            ? null
            : movieQuery.with_watch_providers,
        primary_release_year: movieQuery.primary_release_year,
        query: movieQuery.query || null,
      },
    },
    [movieQuery]
  );
