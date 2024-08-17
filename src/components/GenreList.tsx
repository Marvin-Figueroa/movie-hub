import { List, Image, Space } from "antd";
import { useGenres } from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <List
      size="small"
      bordered
      dataSource={genres}
      renderItem={(genre) => (
        <List.Item>
          <Space align="center" size="middle">
            <Image
              style={{ borderRadius: "8px", border: "2px solid #15B7DB" }}
              preview={false}
              width={50}
              height={70}
              src={genre.imgSrc}
            />
            <h4>{genre.name}</h4>
          </Space>
        </List.Item>
      )}
    />
  );
};

export default GenreList;
