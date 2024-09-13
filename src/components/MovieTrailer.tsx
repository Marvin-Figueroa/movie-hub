import { Spin } from "antd";
import { useTrailers } from "../hooks/useTrailers";
import MovieImagesCarousel from "./MovieImagesCarousel";

interface Props {
  movieId: number | string;
}

const MovieTrailer = ({ movieId }: Props) => {
  const { data, isLoading, error } = useTrailers(movieId);

  if (isLoading) return <Spin size="large" />;

  if (error) throw error;

  const videoTrailerKey = data?.results.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  )?.key;

  const trailerUrl = `https://www.youtube-nocookie.com/embed/${videoTrailerKey}?version=3&enablejsapi=1`;

  return videoTrailerKey ? (
    <iframe width="100%" height="340px" src={trailerUrl}></iframe>
  ) : (
    <MovieImagesCarousel movieId={movieId} />
  );
};

export default MovieTrailer;
