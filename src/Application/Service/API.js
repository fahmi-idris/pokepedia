import axios from 'axios'
export const getPokemonList = (paginate) => { return axios.get(`http://localhost:8000/api/v2/pokemon?limit=${paginate}`); };
export const getPokemonDetail = (url) => { return axios.get(url); };