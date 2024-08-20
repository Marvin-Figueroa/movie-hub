import { Button, Flex, Grid, Image, Input, Space } from "antd";
import logo from "../assets/movie-database-logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
  loading: boolean;
  onSearch: (searchText: string) => void;
  onActiveSearch: () => void;
}

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
      <Search
        placeholder="Search movies by title..."
        onSearch={(value) => onSearch(value)}
        size="large"
        allowClear
        loading={loading}
        style={{ maxWidth: 400, display: `${screens.md ? "block" : "none"}` }}
      />
      <Space style={{ gap: "20px", cursor: "pointer" }}>
        <Button
          onClick={onActiveSearch}
          shape="circle"
          icon={<SearchOutlined />}
          style={{ display: `${screens.md ? "none" : "block"}` }}
        />
        <ColorModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </Space>
    </Flex>
  );
};

export default NavBar;
