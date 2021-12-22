import React, { FC } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import CustomLoader from "../components/CustomLoader";
import CharacterInfo from "../components/CharacterInfo";
import DataContainer from "../components/DataContainer";
import SpeciesComponent from "../components/SpeciesComponent";
import { useAsyncDispatch, useSelector, useDispatch } from "../store";
import BackgroundImageContainer from "../components/BackgroundContainer";
import CharacterBackground from "../assets/images/background-character.jpeg";
import { GetCharacterById, CleanCharacter } from "../store/actions/characters";

const CharacterPageContainer = styled(BackgroundImageContainer)`
  background-image: url(${CharacterBackground});
`;

const CharacterPage: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const asyncDispatch = useAsyncDispatch();
  const character = useSelector((state) => state.characters.character);
  const loading = useSelector((state) => state.characters.loading);

  React.useEffect(() => {
    id && asyncDispatch(GetCharacterById(id));
    return () => {
      dispatch(CleanCharacter());
    };
  }, [asyncDispatch, dispatch, id]);

  return (
    <CharacterPageContainer>
      <DataContainer>
        {loading ? (
          <CustomLoader />
        ) : (
          <>
            <CharacterInfo character={character} />
            <SpeciesComponent species={character && character?.species} />{" "}
          </>
        )}
      </DataContainer>
    </CharacterPageContainer>
  );
};

export default CharacterPage;
