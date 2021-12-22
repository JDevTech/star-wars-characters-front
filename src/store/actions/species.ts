import { AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getSpecieById } from "../../services/species";
import { SpeciesActions } from "../../utils/@types/actions";

type ThunkSpecies = ThunkAction<Promise<void>, {}, {}, AnyAction>;

export const GetSpecieById = (specieId: string): ThunkSpecies => {
  return async (dispatch: Dispatch<SpeciesActions>) => {
    try {
      const {
        data: { specie },
      } = await await getSpecieById(specieId);
      dispatch({ type: "GET_SPECIE", specie });
    } catch (err) {
      dispatch({ type: "GET_SPECIE", specie: null });
    }
  };
};
