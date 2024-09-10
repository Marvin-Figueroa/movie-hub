import styled from "styled-components";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import { Switch } from "antd";
import useMovieQueryStore from "../store";

const StyledSwitch = styled(Switch)`
  background-color: #15b7db;
`;

const Icon = styled.span`
  font-size: 15px;
  color: #fff;
`;

const ColorModeSwitch = () => {
  const { darkMode, setDarkMode } = useMovieQueryStore();

  return (
    <StyledSwitch
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
      checkedChildren={<Icon as={MoonFilled} />}
      unCheckedChildren={<Icon as={SunFilled} />}
    />
  );
};

export default ColorModeSwitch;
