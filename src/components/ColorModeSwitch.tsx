import { MoonFilled, SunFilled } from "@ant-design/icons";
import { Flex, Switch } from "antd";

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const iconStyle = { fontSize: "15px", color: "#fff" };

const ColorModeSwitch = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <Flex gap="middle">
      <Switch
        style={{ backgroundColor: "#15B7DB" }}
        checked={darkMode}
        onChange={toggleDarkMode}
        checkedChildren={<MoonFilled style={iconStyle} />}
        unCheckedChildren={<SunFilled style={iconStyle} />}
      />
    </Flex>
  );
};

export default ColorModeSwitch;
