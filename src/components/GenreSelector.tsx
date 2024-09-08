import { Select } from "antd";
import genres from "../data/genres";
import styled from "styled-components";
import useMovieQueryStore from "../store";

const options = [
  { value: -1, label: "All Genres" },
  ...genres.map((genre) => ({
    value: genre.id,
    label: genre.name,
  })),
];

const CustomSelect = styled(Select)`
  width: 100%;
  min-width: 130px;
`;

const GenreSelector = () => {
  const selectedGenre = useMovieQueryStore((s) => s.movieQuery.genre);
  const setGenreId = useMovieQueryStore((s) => s.setGenreId);

  return (
    <CustomSelect
      value={options.find((option) => option.value === (selectedGenre || -1))}
      onSelect={(_, option) => setGenreId(option.value)}
      options={options}
    />
  );
};

export default GenreSelector;
