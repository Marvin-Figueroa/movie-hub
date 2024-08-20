import { List, Button } from "antd";
import { useGenres } from "../hooks/useGenres";

interface Props {
  selectedGenre?: number;
  onSelectGenre: (genre: number) => void;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres } = useGenres();

  return (
    <List
      size="small"
      dataSource={[{ id: -1, name: "All" }, ...genres]}
      renderItem={(genre) => (
        <List.Item>
          <Button
            size="small"
            onClick={() => onSelectGenre(genre.id)}
            type="link"
            style={{
              backgroundColor: `${
                selectedGenre === genre.id ? "#15B7DB" : "transparent"
              }`,
              color: `${selectedGenre === genre.id ? "#fff" : "#15B7DB"}`,
              fontWeight: `${selectedGenre === genre.id ? "bolder" : "normal"}`,
            }}
          >
            {genre.name}
          </Button>
        </List.Item>
      )}
    />
  );
};

export default GenreList;
