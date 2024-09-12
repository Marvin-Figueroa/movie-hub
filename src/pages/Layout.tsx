import { Layout as AntdLayout } from "antd";
import Header from "../components/Header";
import PageFooter from "../components/PageFooter";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import useMovieQueryStore from "../store";

const LayoutContainer = styled(AntdLayout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled(AntdLayout.Content)`
  flex-grow: 1;
`;

const Layout = () => {
  const darkMode = useMovieQueryStore((s) => s.darkMode);
  const customStyle = { backgroundColor: darkMode ? "#0d253f" : "#fff" };

  return (
    <LayoutContainer>
      <Header />
      <Content style={customStyle}>
        <Outlet />
      </Content>
      <PageFooter />
    </LayoutContainer>
  );
};

export default Layout;
