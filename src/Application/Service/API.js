import axios from 'axios'

export const  getPokemonList = () => {
  return axios.get('http://localhost:8000/api/v2/pokemon/');
};