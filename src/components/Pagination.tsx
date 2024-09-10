import { Space, Pagination as AntdPagination } from "antd";
import styled from "styled-components";
import useMovieQueryStore from "../store";
import { useMovies } from "../hooks/useMovies";

const CustomSpace = styled(Space)`
  justify-content: center;
  margin: 3rem auto;
  width: 100%;
`;

const Pagination = () => {
  const { data, isLoading } = useMovies();
  const setPage = useMovieQueryStore((s) => s.setPage);
  const page = useMovieQueryStore((s) => s.movieQuery.page);

  return (
    <CustomSpace>
      <AntdPagination
        disabled={isLoading}
        showSizeChanger={false}
        current={page}
        // Max 'page' value allowed in API is 500
        // Default page size is 20 (cannot be changed, API does not support custom values )
        // 10,000 items, 20 per page gives you the max 0f 500 pages
        total={Math.min(data ? data.total_results : 10_000, 10_000)}
        defaultPageSize={20}
        onChange={setPage}
      />
    </CustomSpace>
  );
};

export default Pagination;
