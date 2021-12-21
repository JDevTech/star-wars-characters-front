import React from "react";
import styled from "styled-components";
import BackgroundImageContainer from "../components/BackgroundImageContainer";
import CharacterBackground from "../assets/images/background-character.jpeg";

const CharacterPageContainer = styled(BackgroundImageContainer)`
  background-image: url(${CharacterBackground});
`;

const CharacterPage = () => {
  return <CharacterPageContainer></CharacterPageContainer>;
};

export default CharacterPage;
