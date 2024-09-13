import { Col, Grid, Image, Row, Spin } from "antd";
import { useMovieImages } from "../hooks/useMovieImages";
import styled from "styled-components";

const StyledRow = styled(Row)`
  && {
    width: 100%;
    padding: 0.5rem 3rem 3rem 3rem;
    height: 100%;

    @media (max-width: 600px) {
      padding: 0.5rem 1rem 3rem 1rem;
    }
  }
`;

interface Props {
  movieId: number | string;
}

const MovieImageGallery = ({ movieId }: Props) => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { data, isLoading, error } = useMovieImages(movieId);

  if (isLoading) return <Spin size="large" />;

  if (error) throw error;

  return data && data.backdrops.length >= 4 ? (
    <StyledRow justify="start" gutter={[16, 16]}>
      {data?.backdrops.slice(0, 8).map((backdrop) => (
        <Col xs={24} sm={12} md={8} xl={6} xxl={4} key={backdrop.file_path}>
          <Image
            src={`${import.meta.env.VITE_APP_API_IMAGES_BASE_URL}/${
              screens.md ? "w780" : "w500"
            }/${backdrop.file_path}`}
          />
        </Col>
      ))}
    </StyledRow>
  ) : null;
};

export default MovieImageGallery;
