import ApiInstance from "./__config";
import {
  CharactersResponse,
  CharacterResponse,
} from "../utils/@types/response";
import { AxiosResponse } from "axios";
import { QueryParams } from "../utils/@types/response";

const API_PREFIX = "characters";

const getCharacters = async (
  params: QueryParams | null
): Promise<AxiosResponse<CharactersResponse>> => {
  const characters = await ApiInstance.get<CharactersResponse>(API_PREFIX, {
    params,
  });
  return characters;
};

const getCharacterById = async (
  characterId: string
): Promise<AxiosResponse<CharacterResponse>> => {
  const urlWithParams = `${API_PREFIX}/${characterId}`;
  const character = await ApiInstance.get<CharacterResponse>(urlWithParams);
  return character;
};

export { getCharacters, getCharacterById };
