import { Character, Specie, QueryParams } from "./response";

// Characters Action Creator Types
export type CharactersActions =
  | { type: "CLEAN_CHARACTER" }
  | { type: "SET_LOADING"; loading: boolean }
  | { type: "SET_NEXT_PARAMS"; next: QueryParams | null }
  | { type: "GET_CHARACTER"; character: Character | null }
  | { type: "GET_ALL_CHARACTERS"; characters: Character[] }
  | { type: "SET_PREVIOUS_PARAMS"; previous: QueryParams | null };

//Species Action Creator Types
export type SpeciesActions = { type: "GET_SPECIE"; specie: Specie | null };
