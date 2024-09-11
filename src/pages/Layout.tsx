import { Layout as AntdLayout } from "antd";
import Header from "../components/Header";
import PageFooter from "../components/PageFooter";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutContainer = styled(AntdLayout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled(AntdLayout.Content)`
  flex-grow: 1;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <PageFooter />
    </LayoutContainer>
  );
};

export default Layout;
