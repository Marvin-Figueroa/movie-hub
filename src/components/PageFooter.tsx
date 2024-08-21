import { Footer } from "antd/es/layout/layout";
import { Image, Space, Typography } from "antd";

const { Text, Link } = Typography;
import justwatchLogo from "../assets/justwatch-logo.png";
import tmdbLogo from "../assets/movie-database-logo.svg";

const PageFooter = () => {
  return (
    <Footer style={{ textAlign: "center", paddingTop: "35px" }}>
      <Space direction="vertical">
        <Text strong style={{ fontSize: "16px", textWrap: "nowrap" }}>
          Developed by
          <Link
            href="https://github.com/Marvin-Figueroa"
            target="_blank"
            style={{ fontSize: "16px", color: "#15B7DB" }}
          >
            &nbsp;Marvin Figueroa&nbsp;
          </Link>
          ©{new Date().getFullYear()}
        </Text>
        <Text style={{ fontSize: "16px" }}>Powered By</Text>
      </Space>
      <Space
        size="large"
        style={{
          justifyContent: "center",
          margin: 0,
          width: "100%",
        }}
      >
        <Image preview={false} width={100} src={tmdbLogo} />
        <Image preview={false} width={100} src={justwatchLogo} />
      </Space>
    </Footer>
  );
};

export default PageFooter;
