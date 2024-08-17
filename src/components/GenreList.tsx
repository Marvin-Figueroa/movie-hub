import { List, Image, Space, Button } from "antd";
import { useGenres } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: number) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres } = useGenres();

  return (
    <List
      size="small"
      bordered
      dataSource={genres}
      renderItem={(genre) => (
        <List.Item>
          <Space align="center" size="small">
            <Image
              style={{ borderRadius: "8px", border: "2px solid #15B7DB" }}
              preview={false}
              width={50}
              height={70}
              src={genre.imgSrc}
            />
            <Button
              size="large"
              onClick={() => onSelectGenre(genre.id)}
              type="link"
              style={{ color: "#15B7DB" }}
            >
              {genre.name}
            </Button>
          </Space>
        </List.Item>
      )}
    />
  );
};

export default GenreList;
