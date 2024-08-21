import styled from "styled-components";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import { Switch } from "antd";

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const StyledSwitch = styled(Switch)`
  background-color: #15b7db;
`;

const Icon = styled.span`
  font-size: 15px;
  color: #fff;
`;

const ColorModeSwitch = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <StyledSwitch
      checked={darkMode}
      onChange={toggleDarkMode}
      checkedChildren={<Icon as={MoonFilled} />}
      unCheckedChildren={<Icon as={SunFilled} />}
    />
  );
};

export default ColorModeSwitch;
