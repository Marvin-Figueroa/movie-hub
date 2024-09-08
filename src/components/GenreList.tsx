import { List, Button } from "antd";
import { useGenres } from "../hooks/useGenres";
import styled from "styled-components";
import useMovieQueryStore from "../store";

const CustomButton = styled(Button)<{ selected: boolean }>`
  &&&& {
    background-color: ${({ selected }) =>
      selected ? "#15B7DB" : "transparent"};
    color: ${({ selected }) => (selected ? "#fff" : "#15B7DB")};
    font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  }
`;

const GenreList = () => {
  const selectedGenre = useMovieQueryStore((s) => s.movieQuery.genre);
  const setGenreId = useMovieQueryStore((s) => s.setGenreId);
  const { data } = useGenres();

  return (
    <List
      size="small"
      dataSource={data ? [{ id: -1, name: "All" }, ...data.genres] : []}
      renderItem={(genre) => (
        <List.Item>
          <CustomButton
            selected={selectedGenre === genre.id}
            size="small"
            onClick={() => setGenreId(genre.id)}
            type="text"
          >
            {genre.name}
          </CustomButton>
        </List.Item>
      )}
    />
  );
};

export default GenreList;
