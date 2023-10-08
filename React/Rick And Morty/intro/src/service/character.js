import axios from "axios";

export function getCharacters() {
  // return axios.get("http://localhost:5000/results");
  return axios.get("https://rickandmortyapi.com/api/character/?page=2");
}

export const getFirstEpisode = (url) => {
  return axios.get(url).then((response) => response.data.name);
};