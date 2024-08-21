import { Select } from "antd";
import styled from "styled-components";

interface Props {
  onSelectSort: (sort: string) => void;
  selectedSort?: string;
}

const CustomSelect = styled(Select)`
  width: 100%;
  min-width: 130px;
`;

const options = [
  { value: "title.asc", label: "Title" },
  { value: "revenue.desc", label: "Revenue" },
  { value: "popularity.desc", label: "Popularity" },
  { value: "vote_average.desc", label: "Average Rating" },
  { value: "primary_release_date.desc", label: "Release Date" },
];

const SortSelector = ({ onSelectSort, selectedSort }: Props) => {
  return (
    <CustomSelect
      value={options.find(
        (option) => option.value === (selectedSort || "popularity.desc")
      )}
      onSelect={(_, option) => onSelectSort(option.value)}
      options={options}
    />
  );
};

export default SortSelector;
