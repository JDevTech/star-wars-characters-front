import React from "react";
import styled from "styled-components";
import NotFoundBackground from "../assets/images/background-not-found.jpeg";
import BackgroundImageContainer from "../components/BackgroundContainer";

const NotFoundPageContainer = styled(BackgroundImageContainer)`
  background-image: url(${NotFoundBackground});
`;

const NotFound = () => {
  return <NotFoundPageContainer></NotFoundPageContainer>;
};

export default NotFound;
