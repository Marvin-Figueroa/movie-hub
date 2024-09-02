import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import APIClient from "../services/apiClient";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenresResponse {
  genres: Genre[];
}

const apiClient = new APIClient<FetchGenresResponse>("/genre/movie/list");

dayjs.extend(duration);

export const useGenres = () =>
  useQuery<FetchGenresResponse, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: dayjs.duration(1, "day").asMilliseconds(),
    initialData: { genres },
  });
