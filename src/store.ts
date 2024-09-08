import { create } from "zustand";

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setGenreId: (genreId: number) => void;
  setWatchProviderId: (watchProviderId: number) => void;
  setSearchText: (searchText: string) => void;
  setPage: (page: number) => void;
  setYear: (year: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

interface MovieQuery {
  genre?: number;
  watchProvider?: number;
  sort?: string;
  year?: number;
  search?: string;
  page?: number;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, genre: genreId, page: 1 },
    })),
  setWatchProviderId: (providerId) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, watchProvider: providerId, page: 1 },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, sort: sortOrder },
    })),
  setPage: (page) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, page: page },
    })),
  setYear: (year) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, year, page: 1 },
    })),
  setSearchText: (searchText) =>
    set(() => ({
      movieQuery: {
        search: searchText,
        page: 1,
      },
    })),
}));

export default useMovieQueryStore;
