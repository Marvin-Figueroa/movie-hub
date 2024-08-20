import { Select } from "antd";
import genres from "../data/genres";

interface Props {
  selectedGenre?: number;
  onSelectGenre: (genre: number) => void;
}

const GenreSelector = ({ selectedGenre, onSelectGenre }: Props) => {
  const options = [
    { value: -1, label: "All Genres" },
    ...genres.map((genre) => ({
      value: genre.id,
      label: genre.name,
    })),
  ];
  return (
    <Select
      value={options.find((option) => option.value === (selectedGenre || -1))}
      onSelect={(_, option) => onSelectGenre(option.value)}
      options={options}
      style={{ width: "100%", minWidth: "130px" }}
    />
  );
};

export default GenreSelector;
