import styled from "styled-components";
import { Footer } from "antd/es/layout/layout";
import { Image, Space, Typography } from "antd";

const { Text, Link } = Typography;

import justwatchLogo from "../assets/justwatch-logo.png";
import tmdbLogo from "../assets/movie-database-logo.svg";
import reactLogo from "../assets/react.svg";

const CustomSpace = styled(Space)`
  justify-content: center;
  margin: 0;
  width: 100%;
`;

const CustomFooter = styled(Footer)`
  text-align: center;
  padding-top: 35px;
`;

const CustomText = styled(Text)`
  font-size: 16px;
  text-wrap: nowrap;
`;

const CustomLink = styled(Link)`
  &&& {
    font-size: 16px;
    color: #15b7db;
  }
`;

const PageFooter = () => {
  return (
    <CustomFooter>
      <Space direction="vertical" size="middle">
        <CustomText strong>
          Developed by
          <CustomLink href="https://github.com/Marvin-Figueroa" target="_blank">
            &nbsp;Marvin Figueroa&nbsp;
          </CustomLink>
          ©{new Date().getFullYear()}
        </CustomText>
        <Text>Powered By</Text>
      </Space>
      <CustomSpace size="large">
        <Image preview={false} width={100} src={tmdbLogo} />
        <Image preview={false} width={30} src={reactLogo} />
        <Image preview={false} width={100} src={justwatchLogo} />
      </CustomSpace>
    </CustomFooter>
  );
};

export default PageFooter;
