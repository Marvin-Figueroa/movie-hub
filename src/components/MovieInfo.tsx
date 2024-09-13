import { Flex, Statistic } from "antd";
import { MovieDetail } from "../types/MovieDetail";
import { formatDurationFromMinutes } from "../utils/timeUtils";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  LikeOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const StyledFlex = styled(Flex)``;

const valueStyle = { color: "#15b7db", fontSize: "1.2rem", fontWeight: "600" };

interface Props {
  movie: MovieDetail;
}

const MovieInfo = ({ movie }: Props) => {
  return (
    <StyledFlex wrap="wrap" gap="2rem">
      <Statistic
        title="Budget"
        value={movie.budget}
        precision={2}
        valueStyle={valueStyle}
        prefix={"$"}
      />
      <Statistic
        title="Revenue"
        value={movie.revenue}
        precision={2}
        valueStyle={valueStyle}
        prefix={"$"}
      />
      <Statistic
        title="Votes"
        value={movie.vote_count}
        precision={0}
        valueStyle={valueStyle}
        prefix={<LikeOutlined />}
      />
      <Statistic
        title="Average Rating"
        precision={1}
        value={movie.vote_average}
        valueStyle={valueStyle}
        prefix={<LineChartOutlined />}
      />
      <Statistic
        title="Runtime"
        value={formatDurationFromMinutes(movie.runtime)}
        valueStyle={valueStyle}
        prefix={<ClockCircleOutlined />}
      />
      <Statistic
        title="Release Date"
        value={movie.release_date}
        valueStyle={valueStyle}
        prefix={<CalendarOutlined />}
      />
    </StyledFlex>
  );
};

export default MovieInfo;
