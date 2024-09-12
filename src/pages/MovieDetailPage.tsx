import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import { Spin } from "antd";
import ProductionCompanyList from "../components/ProductionCompanyList";
import MovieImagesCarousel from "../components/MovieImagesCarousel";
import GenreTagList from "../components/GenreTagList";
import MovieInfo from "../components/MovieInfo";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useMovie(id!);

  if (isLoading) return <Spin size="large" />;

  if (!data || error) throw error;

  return (
    <>
      <h3>{data?.title}</h3>
      <h5>{data?.tagline}</h5>
      <p>{data?.overview}</p>
      {data?.genres && <GenreTagList genres={data.genres} />}
      <MovieImagesCarousel movieId={parseInt(id!)} />
      <MovieInfo movie={data} />
      {data?.production_companies && (
        <ProductionCompanyList companies={data?.production_companies} />
      )}
    </>
  );
};

export default MovieDetailPage;
