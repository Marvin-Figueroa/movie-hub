import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import APIClient from "../services/apiClient";
import { MovieDetail } from "../types/MovieDetail";

dayjs.extend(duration);

const apiClient = new APIClient<MovieDetail>(`/movie/`);

export const useMovie = (movieId: number | string) => {
  return useQuery<MovieDetail, Error>({
    queryKey: ["movies", movieId],
    queryFn: () => apiClient.get(movieId),
  });
};
