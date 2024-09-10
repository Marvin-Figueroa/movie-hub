import { Grid, Layout } from "antd";
import styled from "styled-components";
import MobileSearch from "./MobileSearch";
import NavBar from "./NavBar";
import { useMovies } from "../hooks/useMovies";
import useMovieQueryStore from "../store";

const { Header: AntHeader } = Layout;

const CustomHeader = styled(AntHeader)<{
  backgroundColor?: string;
  padding?: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding};
`;

const Header = () => {
  const { isLoading } = useMovies();

  const { darkMode, mobileSearchIsActive, setMobileSearchIsActive } =
    useMovieQueryStore();

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const customStyle = { backgroundColor: darkMode ? "#0d253f" : "#fff" };

  return (
    <CustomHeader
      backgroundColor={customStyle.backgroundColor}
      padding={screens.lg ? "0 50px" : "0 20px"}
    >
      {mobileSearchIsActive && !screens.md && (
        <MobileSearch
          isLoading={isLoading}
          setMobileSearchActive={(isActive) =>
            setMobileSearchIsActive(isActive)
          }
        />
      )}
      {(!mobileSearchIsActive || screens.md) && <NavBar />}
    </CustomHeader>
  );
};

export default Header;
