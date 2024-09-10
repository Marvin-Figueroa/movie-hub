import { Button, Flex, Grid, Image, Input, Space } from "antd";
import logo from "../assets/movie-database-logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import useMovieQueryStore from "../store";
import { useMovies } from "../hooks/useMovies";

const { Search } = Input;

const CustomButton = styled(Button)<{ isMdScreen?: boolean }>`
  && {
    display: ${({ isMdScreen }) => (isMdScreen ? "none" : "block")};
  }
`;

const CustomSearch = styled(Search)<{ isMdScreen?: boolean }>`
  max-width: 400px;
  display: ${({ isMdScreen }) => (isMdScreen ? "block" : "none")};
`;

const NavBar = () => {
  const { isLoading } = useMovies();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const setSearchText = useMovieQueryStore((s) => s.setSearchText);
  const setMobileSearchIsActive = useMovieQueryStore(
    (s) => s.setMobileSearchIsActive
  );

  return (
    <Flex justify="space-between" align="center">
      <Image preview={false} width={screens.md ? 150 : 100} src={logo} />
      <CustomSearch
        placeholder="Search movies by title..."
        onSearch={setSearchText}
        size="large"
        allowClear
        loading={isLoading}
        isMdScreen={screens.md}
      />
      <Space size={screens.sm ? "large" : "middle"}>
        <CustomButton
          onClick={() => setMobileSearchIsActive(true)}
          shape="circle"
          icon={<SearchOutlined />}
          isMdScreen={screens.md}
        />
        <ColorModeSwitch />
      </Space>
    </Flex>
  );
};

export default NavBar;
