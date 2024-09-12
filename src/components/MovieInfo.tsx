import { Flex, Statistic } from "antd";
import { MovieDetail } from "../types/MovieDetail";
import { formatDurationFromMinutes } from "../utils/timeUtils";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  LikeOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

interface Props {
  movie: MovieDetail;
}

const MovieInfo = ({ movie }: Props) => {
  return (
    <Flex gap="4rem">
      <Flex vertical gap="2rem">
        <Statistic
          title="Votes"
          value={movie.vote_count}
          precision={0}
          valueStyle={{ color: "#15b7db" }}
          prefix={<LikeOutlined />}
        />
        <Statistic
          title="Budget"
          value={movie.budget}
          precision={2}
          valueStyle={{ color: "#15b7db" }}
          prefix={"$"}
        />
        <Statistic
          title="Runtime"
          value={formatDurationFromMinutes(movie.runtime)}
          valueStyle={{ color: "#15b7db" }}
          prefix={<ClockCircleOutlined />}
        />
      </Flex>
      <Flex vertical gap="2rem">
        <Statistic
          title="Average Rating"
          precision={1}
          value={movie.vote_average}
          valueStyle={{ color: "#15b7db" }}
          prefix={<LineChartOutlined />}
        />
        <Statistic
          title="Revenue"
          value={movie.revenue}
          precision={2}
          valueStyle={{ color: "#15b7db" }}
          prefix={"$"}
        />
        <Statistic
          title="Release Date"
          value={movie.release_date}
          valueStyle={{ color: "#15b7db" }}
          prefix={<CalendarOutlined />}
        />
      </Flex>
    </Flex>
  );
};

export default MovieInfo;
