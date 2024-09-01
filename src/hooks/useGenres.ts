import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/apiClient";

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenresResponse {
  genres: Genre[];
}

const apiClient = new APIClient<FetchGenresResponse>("/genre/movie/list");

export const useGenres = () =>
  useQuery<FetchGenresResponse, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24H
    initialData: { genres },
  });
