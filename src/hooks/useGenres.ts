import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
}

export const useGenres = () => ({ data: genres, loading: false, error: null });
