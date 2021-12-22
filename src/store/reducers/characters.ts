import { Character, QueryParams } from "../../utils/@types/response";
import { CharactersActions } from "../../utils/@types/actions";

export interface ICharactersState {
  next: QueryParams | null;
  previous: QueryParams | null;
  characters: Character[];
  character: Character | null;
}

const initialState: ICharactersState = {
  next: null,
  previous: null,
  characters: [],
  character: null,
};

const charactersReducer = (
  state: ICharactersState = initialState,
  action: CharactersActions
) => {
  switch (action.type) {
    case "SET_NEXT_PARAMS":
      const { next } = action;
      return { ...state, next };
    case "SET_PREVIOUS_PARAMS":
      const { previous } = action;
      return { ...state, previous };
    case "GET_CHARACTER":
      const { character } = action;
      return { ...state, character };
    case "GET_ALL_CHARACTERS":
      const { characters } = action;
      return { ...state, characters };
    case "CLEAN_CHARACTER": {
      return { ...state, character: null };
    }
    default:
      return { ...state };
  }
};

export default charactersReducer;
