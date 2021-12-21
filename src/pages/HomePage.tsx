import React, { FC } from "react";
import styled from "styled-components";
import CustomTable from "../components/CustomTable";
import { QueryParams } from "../utils/@types/response";
import DataContainer from "../components/DataContainer";
import { useAsyncDispatch, useSelector } from "../store";
import { GetAllCharacters } from "../store/actions/characters";
import HomeBackground from "../assets/images/background-list.jpeg";
import BackgroundImageContainer from "../components/BackgroundImageContainer";

const fields = {
  name: "Name",
  mass: "Mass",
  height: "Height",
  gender: "Gender",
  birth_year: "Birth Date",
  skin_color: "Skin Color",
  hair_color: "Hair Color",
};

const links = {
  name: "character/:id",
};

const sorters = ["name", "birth_year"];

const HomePageContainer = styled(BackgroundImageContainer)`
  background-image: url(${HomeBackground});
`;

const HomePage: FC = () => {
  const dispatch = useAsyncDispatch();
  const next = useSelector((state) => state.characters.next);
  const previous = useSelector((state) => state.characters.previous);
  const characters = useSelector((state) => state.characters.characters);

  React.useEffect(() => {
    dispatch(GetAllCharacters());
  }, [dispatch]);

  const requestData = (params: QueryParams | null) => {
    params && dispatch(GetAllCharacters(params));
  };

  return (
    <HomePageContainer>
      <DataContainer>
        <CustomTable
          next={next}
          links={links}
          fields={fields}
          sortBy={sorters}
          data={characters}
          previous={previous}
          onRequestData={requestData}
        />
      </DataContainer>
    </HomePageContainer>
  );
};

export default HomePage;
