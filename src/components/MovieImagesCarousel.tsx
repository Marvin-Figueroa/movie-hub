import { Carousel, Image } from "antd";
import { useMovieImages } from "../hooks/useMovieImages";

interface Props {
  movieId: number;
}

const MovieImagesCarousel = ({ movieId }: Props) => {
  const { data } = useMovieImages(movieId);

  return (
    <Carousel style={{ width: "400px" }} dots autoplay autoplaySpeed={5000}>
      {data?.backdrops.slice(0, 10).map((image) => (
        <Image
          key={image.file_path}
          preview={false}
          width={400}
          src={`${import.meta.env.VITE_APP_API_IMAGES_BASE_URL}/w500/${
            image.file_path
          }`}
        />
      ))}
    </Carousel>
  );
};

export default MovieImagesCarousel;
