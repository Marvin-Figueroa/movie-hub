import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Trailer } from "../types/Trailer";

interface FetchTrailersResponse {
  id: number;
  results: Trailer[];
}

export const useTrailers = (movieId: number | string) => {
  const apiClient = new APIClient<FetchTrailersResponse>(
    `/movie/${movieId}/videos`
  );

  return useQuery<FetchTrailersResponse, Error>({
    queryKey: ["trailers", movieId],
    queryFn: () => apiClient.getAll(),
  });
};
