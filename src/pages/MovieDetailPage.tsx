import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import { Spin } from "antd";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useMovie(id!);

  if (isLoading) return <Spin size="large" />;

  if (error) throw error;

  return (
    <>
      <h3>{data?.title}</h3>
      <p>{data?.overview}</p>
    </>
  );
};

export default MovieDetailPage;
