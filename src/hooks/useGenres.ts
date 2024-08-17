import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  imgSrc: string;
}

export const useGenres = () => ({ data: genres, loading: false, error: null });
