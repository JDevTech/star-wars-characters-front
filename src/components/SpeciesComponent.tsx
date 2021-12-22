import React, { FC } from "react";
import CustomTable from "./CustomTable";
import { Specie } from "../utils/@types/response";
import { getSpecieById } from "../services/species";

interface ISpeciesComponent {
  species: string[] | null | undefined;
}

const fields = {
  name: "Name",
  language: "Language",
  skin_colors: "Skin Colors",
  average_height: "Average Height",
  average_lifespan: "Average Lifespan",
  classification: "Classification",
  designation: "Designation",
};

const SpeciesComponent: FC<ISpeciesComponent> = ({ species }) => {
  const [speciesInfo, setSpeciesInfo] = React.useState<Specie[]>([]);

  const getSpecieInfo = async (specieId: string) => {
    const {
      data: { specie },
    } = await getSpecieById(specieId);
    specie && setSpeciesInfo((value) => [...value, specie]);
  };

  React.useEffect(() => {
    const getSpeciesInfo = () => {
      setSpeciesInfo([]);
      species && species.forEach(getSpecieInfo);
    };

    getSpeciesInfo();

    return () => {
      setSpeciesInfo([]);
    };
  }, [species]);

  return (
    <>
      <CustomTable title="Species" fields={fields} data={speciesInfo} />
    </>
  );
};

export default SpeciesComponent;
