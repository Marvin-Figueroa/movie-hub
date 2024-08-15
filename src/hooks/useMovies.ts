import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

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

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchMoviesResponse>("/discover/movie", {
        signal: controller.signal,
      })
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { movies, error, loading };
};
