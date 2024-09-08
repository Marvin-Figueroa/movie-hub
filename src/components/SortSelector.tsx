import { Select } from "antd";
import styled from "styled-components";
import useMovieQueryStore from "../store";

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

const SortSelector = () => {
  const selectedSort = useMovieQueryStore((s) => s.movieQuery.sort);
  const setSortOrder = useMovieQueryStore((s) => s.setSortOrder);

  return (
    <CustomSelect
      value={options.find(
        (option) => option.value === (selectedSort || "popularity.desc")
      )}
      onSelect={(_, option) => setSortOrder(option.value)}
      options={options}
    />
  );
};

export default SortSelector;
