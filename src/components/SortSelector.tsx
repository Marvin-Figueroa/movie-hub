import { Select } from "antd";

interface Props {
  onSelectSort: (sort: string) => void;
  selectedSort?: string;
}

const SortSelector = ({ onSelectSort, selectedSort }: Props) => {
  const options = [
    { value: "title.asc", label: "Title" },
    { value: "revenue.desc", label: "Revenue" },
    { value: "popularity.desc", label: "Popularity" },
    { value: "vote_average.desc", label: "Average Rating" },
    { value: "primary_release_date.desc", label: "Release Date" },
  ];

  return (
    <Select
      value={options.find(
        (option) => option.value === (selectedSort || "popularity.desc")
      )}
      onSelect={(_, option) => onSelectSort(option.value)}
      style={{ width: "100%", minWidth: "130px" }}
      options={options}
    />
  );
};

export default SortSelector;
