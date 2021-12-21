import { SpeciesActions } from "../../utils/@types/actions";

export const GetSpecie = (specieId: string): SpeciesActions => {
  return { type: "GET_SPECIE", specie: null };
};
