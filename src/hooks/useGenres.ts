import { useData } from "./useData";

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenresResponse {
  genres: Genre[];
}

export const useGenres = () =>
  useData<FetchGenresResponse, Genre>(
    "/genre/movie/list",
    (response) => response.genres
  );
