import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { Typography, Image, Button } from "antd";
import styled from "styled-components";

import NotFoundImage from "../assets/404-error.svg";
import UnexpectedErrorImage from "../assets/unexpected-error.png";

const StyledErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  height: 100vh;
`;

const StyledTitle = styled(Typography.Title)`
  && {
    font-size: 3rem;
    color: crimson;
  }
`;

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <StyledErrorPageContainer>
      <StyledTitle level={1}>Oops!</StyledTitle>
      <Image
        preview={false}
        src={isRouteErrorResponse(error) ? NotFoundImage : UnexpectedErrorImage}
        alt={
          isRouteErrorResponse(error)
            ? "Page not found image"
            : "Unexpected error image"
        }
        width="300px"
      />
      <Typography.Title level={5}>
        {isRouteErrorResponse(error)
          ? "Sorry 😔, we could not find what you were looking for."
          : "An unexpected error occurred 💥"}
      </Typography.Title>
      <Link to="/">
        <Button type="primary" size="large">
          Go Home
        </Button>
      </Link>
    </StyledErrorPageContainer>
  );
};

export default ErrorPage;
