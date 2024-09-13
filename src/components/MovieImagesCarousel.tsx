import { Carousel, Grid, Image } from "antd";
import { useMovieImages } from "../hooks/useMovieImages";

interface Props {
  movieId: number | string;
}

const MovieImagesCarousel = ({ movieId }: Props) => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { data } = useMovieImages(movieId);

  return (
    <Carousel style={{ width: "100%" }} dots autoplay autoplaySpeed={5000}>
      {data?.backdrops.slice(0, 8).map((image) => (
        <Image
          key={image.file_path}
          preview={false}
          width="100%"
          src={`${import.meta.env.VITE_APP_API_IMAGES_BASE_URL}/${
            screens.md ? "w780" : "w500"
          }/${image.file_path}`}
        />
      ))}
    </Carousel>
  );
};

export default MovieImagesCarousel;
