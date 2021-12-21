import { AxiosResponse } from "axios";
import { SpecieResponse } from "../utils/@types/response";
import ApiInstance from "./__config";

const API_PREFIX = "species";

const getSpecieById = async (
  specieId: string
): Promise<AxiosResponse<SpecieResponse>> => {
  const urlWithParams = `${API_PREFIX}/${specieId}`;
  const specie = await ApiInstance.get<SpecieResponse>(urlWithParams);
  return specie;
};

export { getSpecieById };
