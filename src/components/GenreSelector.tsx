import { Select } from "antd";
import genres from "../data/genres";
import styled from "styled-components";

interface Props {
  selectedGenre?: number;
  onSelectGenre: (genre: number) => void;
}

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

const GenreSelector = ({ selectedGenre, onSelectGenre }: Props) => {
  return (
    <CustomSelect
      value={options.find((option) => option.value === (selectedGenre || -1))}
      onSelect={(_, option) => onSelectGenre(option.value)}
      options={options}
    />
  );
};

export default GenreSelector;
