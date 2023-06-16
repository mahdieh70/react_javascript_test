import { api } from "./axios/api";

export const getCountries = async (country) => {
  return await api.get("", {
    params: {
      q: country,
    },
  });
};
