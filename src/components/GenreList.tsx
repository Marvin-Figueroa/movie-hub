import { List, Image, Space, Button, Typography } from "antd";
import { useGenres } from "../hooks/useGenres";

interface Props {
  selectedGenre?: number;
  onSelectGenre: (genre: number) => void;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres } = useGenres();

  return (
    <>
      <Typography.Title
        level={2}
        style={{ margin: "0 0 20px 20px", color: "#15B7DB" }}
      >
        Genres
      </Typography.Title>
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
                style={{
                  color: "#15B7DB",
                  fontWeight: `${
                    selectedGenre === genre.id ? "bolder" : "normal"
                  }`,
                }}
              >
                {genre.name}
              </Button>
            </Space>
          </List.Item>
        )}
      />
    </>
  );
};

export default GenreList;
