import { Character, Specie, QueryParams } from "./response";

// Characters Action Creator Types
export type CharactersActions =
  | { type: "GET_ALL_CHARACTERS"; characters: Character[] }
  | { type: "GET_CHARACTER"; character: Character }
  | { type: "SET_NEXT_PARAMS"; next: QueryParams | null }
  | { type: "SET_PREVIOUS_PARAMS"; previous: QueryParams | null };

//Species Action Creator Types
export type SpeciesActions = { type: "GET_SPECIE"; specie: Specie | null };
