import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenresResponse {
  genres: Genre[];
}

export const useGenres = () =>
  useQuery<FetchGenresResponse, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchGenresResponse>("/genre/movie/list")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24H
    initialData: { genres },
  });
