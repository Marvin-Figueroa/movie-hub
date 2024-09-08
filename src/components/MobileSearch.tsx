import { Button, Flex, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import useMovieQueryStore from "../store";

const { Search } = Input;

interface Props {
  setMobileSearchActive: (isMobileSearch: boolean) => void;
  isLoading: boolean;
}

const MobileSearch = ({ setMobileSearchActive, isLoading }: Props) => {
  const setSearchText = useMovieQueryStore((s) => s.setSearchText);

  return (
    <Flex justify="center" gap="15px" align="center" style={{ height: "64px" }}>
      <Button
        size="large"
        onClick={() => setMobileSearchActive(false)}
        icon={<ArrowLeftOutlined />}
      />
      <Search
        placeholder="Search movies by title..."
        onSearch={setSearchText}
        size="large"
        allowClear
        loading={isLoading}
        style={{
          maxWidth: 400,
        }}
      />
    </Flex>
  );
};

export default MobileSearch;
