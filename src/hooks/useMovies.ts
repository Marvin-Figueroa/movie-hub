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

export const useMovies = () =>
  useData<FetchMoviesResponse, Movie>(
    "/discover/movie",
    (response) => response.results
  );
