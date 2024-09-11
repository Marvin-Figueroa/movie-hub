import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import APIClient from "../services/apiClient";
import { MovieDetail } from "../types/MovieDetail";

dayjs.extend(duration);

export const useMovie = (movieId: number | string) => {
  const apiClient = new APIClient<MovieDetail>("/movie");

  return useQuery<MovieDetail, Error>({
    queryKey: ["movies", movieId],
    queryFn: () => apiClient.get(movieId),
  });
};
