import { api } from "./axios/api";

export const getCurrency = async (country) => {
  return await api.get(`/chart/${country}`);
};
