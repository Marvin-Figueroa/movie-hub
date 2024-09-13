import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import { Flex, Grid, Spin, Typography } from "antd";
import ProductionCompanyList from "../components/ProductionCompanyList";
import GenreTagList from "../components/GenreTagList";
import MovieInfo from "../components/MovieInfo";
import styled from "styled-components";
import MovieTrailer from "../components/MovieTrailer";

const StyledTitle = styled(Typography.Title)`
  && {
    margin: 0;
    color: #15b7db;
  }
`;

const StyledText = styled(Typography.Text)`
  && {
    margin: 0;
    font-size: 1.2rem;
  }
`;

const StyledFlex = styled(Flex)`
  && {
    width: 100%;
    padding: 3rem;
    height: 100%;

    @media (max-width: 900px) {
      flex-direction: column;
    }

    @media (max-width: 600px) {
      padding: 3rem 1rem;
    }
  }
`;

const StyledFlexItem = styled(Flex)`
  && {
    width: 100%;

    @media (min-width: 900px) {
      width: 50%;
    }
  }
`;

const MovieDetailPage = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { id } = useParams();
  const { data, isLoading, error } = useMovie(id!);

  if (isLoading) return <Spin size="large" />;

  if (!data || error) throw error;

  return (
    <StyledFlex gap={screens.lg ? "6rem" : "4rem"}>
      <StyledFlexItem vertical gap="2rem">
        <StyledTitle level={2}>{data.title}</StyledTitle>
        {data.tagline && <StyledTitle level={4}>{data.tagline}</StyledTitle>}
        <StyledText>{data.overview}</StyledText>
        <GenreTagList genres={data.genres} />
        <ProductionCompanyList companies={data?.production_companies} />
      </StyledFlexItem>
      <StyledFlexItem vertical gap="1.5rem">
        <MovieTrailer movieId={data.id} />
        <MovieInfo movie={data} />
      </StyledFlexItem>
    </StyledFlex>
  );
};

export default MovieDetailPage;
