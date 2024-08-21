import { Button, Flex, Grid, Image, Input, Space } from "antd";
import logo from "../assets/movie-database-logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Search } = Input;

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
  loading: boolean;
  onSearch: (searchText: string) => void;
  onActiveSearch: () => void;
}

const CustomButton = styled(Button)<{ isMdScreen?: boolean }>`
  && {
    display: ${({ isMdScreen }) => (isMdScreen ? "none" : "block")};
  }
`;

const CustomSearch = styled(Search)<{ isMdScreen?: boolean }>`
  max-width: 400px;
  display: ${({ isMdScreen }) => (isMdScreen ? "block" : "none")};
`;

const NavBar = ({
  darkMode,
  toggleDarkMode,
  loading,
  onSearch,
  onActiveSearch,
}: Props) => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return (
    <Flex justify="space-between" align="center">
      <Image preview={false} width={screens.md ? 150 : 100} src={logo} />
      <CustomSearch
        placeholder="Search movies by title..."
        onSearch={(value) => onSearch(value)}
        size="large"
        allowClear
        loading={loading}
        isMdScreen={screens.md}
      />
      <Space size={screens.sm ? "large" : "middle"}>
        <CustomButton
          onClick={onActiveSearch}
          shape="circle"
          icon={<SearchOutlined />}
          isMdScreen={screens.md}
        />
        <ColorModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </Space>
    </Flex>
  );
};

export default NavBar;
