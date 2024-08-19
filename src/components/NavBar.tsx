import { Flex, Image, Input } from "antd";
import logo from "../assets/movie-database-logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const { Search } = Input;

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
  loading: boolean;
  onSearch: (searchText: string) => void;
}

const NavBar = ({ darkMode, toggleDarkMode, loading, onSearch }: Props) => {
  return (
    <Flex justify="space-between" align="center">
      <Image preview={false} width={150} src={logo} />
      <Search
        placeholder="Search movies by title..."
        onSearch={(value) => onSearch(value)}
        size="large"
        allowClear
        loading={loading}
        style={{ maxWidth: 500 }}
      />
      <ColorModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </Flex>
  );
};

export default NavBar;
