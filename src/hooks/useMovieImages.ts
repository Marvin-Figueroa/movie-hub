import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { MovieImage } from "../types/MovieImage";

interface FetchMovieImagesResponse {
  id: number;
  backdrops: MovieImage[];
  logos: MovieImage[];
  posters: MovieImage[];
}

export const useMovieImages = (movieId: number | string) => {
  const apiClient = new APIClient<FetchMovieImagesResponse>(
    `/movie/${movieId}/images`
  );

  return useQuery<FetchMovieImagesResponse, Error>({
    queryKey: ["movies", movieId, "images"],
    queryFn: () => apiClient.get(),
  });
};
