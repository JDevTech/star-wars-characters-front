import { ThunkAction } from "redux-thunk";
import { AnyAction, Dispatch } from "redux";
import { getCharacters, getCharacterById } from "../../services/characters";
import { CharactersActions } from "../../utils/@types/actions";
import { QueryParams } from "../../utils/@types/response";

type ThunkCharacters = ThunkAction<Promise<void>, {}, {}, AnyAction>;

export const CleanCharacter = (): CharactersActions => {
  return {
    type: "CLEAN_CHARACTER",
  };
};

export const GetAllCharacters = (
  params: QueryParams | null = null
): ThunkCharacters => {
  return async (dispatch: Dispatch<CharactersActions>) => {
    try {
      const {
        data: { characters, next, previous },
      } = await await getCharacters(params);
      dispatch({ type: "SET_NEXT_PARAMS", next });
      dispatch({ type: "SET_PREVIOUS_PARAMS", previous });
      dispatch({ type: "GET_ALL_CHARACTERS", characters });
    } catch (err) {
      dispatch({ type: "GET_ALL_CHARACTERS", characters: [] });
    }
  };
};

export const GetCharacterById = (characterId: string): ThunkCharacters => {
  return async (dispatch: Dispatch<CharactersActions>) => {
    try {
      const {
        data: { character },
      } = await await getCharacterById(characterId);
      dispatch({ type: "GET_CHARACTER", character });
    } catch (err) {
      dispatch({ type: "GET_CHARACTER", character: null });
    }
  };
};
