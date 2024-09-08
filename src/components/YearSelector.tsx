import { DatePicker } from "antd";
import dayjs from "dayjs";
import useMovieQueryStore from "../store";

const YearSelector = () => {
  const setYear = useMovieQueryStore((s) => s.setYear);
  const year = useMovieQueryStore((s) => s.movieQuery.year);

  return (
    <DatePicker
      value={year ? dayjs().year(year) : null}
      onChange={(date) => setYear(date?.year())}
      picker="year"
      style={{
        width: "100%",
        textAlign: "center",
      }}
      placeholder="Filter by year..."
    />
  );
};

export default YearSelector;
