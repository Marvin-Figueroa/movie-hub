import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import APIClient from "../services/apiClient";
import { Genre } from "./useGenres";

export interface MovieDetail {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  budget: number;
  revenue: number;
  genres: Genre[];
  production_companies: ProductionCompany[];
  video: boolean;
  runtime: number;
  backdrop_path: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

dayjs.extend(duration);

export const useMovie = (movieId: number | string) => {
  const apiClient = new APIClient<MovieDetail>("/movie");

  return useQuery<MovieDetail, Error>({
    queryKey: ["movies", movieId],
    queryFn: () => apiClient.get(movieId),
  });
};
