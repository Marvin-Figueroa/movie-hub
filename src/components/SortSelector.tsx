import { Select } from "antd";

interface Props {
  onSelectSort: (sort: string) => void;
}

const SortSelector = ({ onSelectSort }: Props) => {
  const options = [
    { value: "title.asc", label: "Title" },
    { value: "revenue.desc", label: "Revenue" },
    { value: "popularity.desc", label: "Popularity" },
    { value: "vote_average.desc", label: "Average Rating" },
    { value: "primary_release_date.desc", label: "Release Date" },
  ];

  return (
    <Select
      defaultValue={options.find(
        (option) => option.value === "popularity.desc"
      )}
      onSelect={(_, option) => onSelectSort(option.value)}
      style={{ width: "200px" }}
      options={options}
    />
  );
};

export default SortSelector;
