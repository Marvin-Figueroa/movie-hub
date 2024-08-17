import { List, Spin } from "antd";
import { useGenres } from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, loading } = useGenres();

  return loading ? (
    <Spin size="large" />
  ) : (
    <List
      size="small"
      bordered
      dataSource={genres}
      renderItem={(genre) => <List.Item>{genre.name}</List.Item>}
    />
  );
};

export default GenreList;
