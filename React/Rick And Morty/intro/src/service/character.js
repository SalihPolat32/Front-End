import axios from "axios";

export function getCharacters() {
  return axios.get("http://localhost:5000/characters");
}