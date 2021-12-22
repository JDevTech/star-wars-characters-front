import React, { FC } from "react";
import styled from "styled-components";
import { Character } from "../utils/@types/response";

interface ICharacterInfo {
  character: Character | null | undefined;
}

const CharacterInfoContainer = styled.div`
  margin: 0px 0px 20px;
`;

const CharacterName = styled.h1`
  margin-bottom: 10px;
`;

const CharacterData = styled.h2``;

const CharacterInfo: FC<ICharacterInfo> = ({ character }) => {
  return (
    <CharacterInfoContainer>
      <CharacterName>
        Character Name: {character && character.name}
      </CharacterName>
      <CharacterData>Mass: {character && character.mass}</CharacterData>
      <CharacterData>Height: {character && character.height}</CharacterData>
      <CharacterData>Gender: {character && character.gender}</CharacterData>
      <CharacterData>
        Skin Color: {character && character.skin_color}
      </CharacterData>
    </CharacterInfoContainer>
  );
};

export default CharacterInfo;
