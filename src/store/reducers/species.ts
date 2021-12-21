import { Specie } from "../../utils/@types/response";
import { SpeciesActions } from "../../utils/@types/actions";

interface ISpecieState {
  specie: Specie | null;
}

const initialState: ISpecieState = {
  specie: null,
};

const speciesReducer = (
  state: ISpecieState = initialState,
  action: SpeciesActions
) => {
  switch (action.type) {
    case "GET_SPECIE":
      const { specie } = action;
      return { ...state, specie };
    default:
      return { ...state };
  }
};

export default speciesReducer;
