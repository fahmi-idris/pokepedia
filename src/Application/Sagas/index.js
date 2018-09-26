import { put, call, all } from 'redux-saga/effects';
import * as api from '../Service/API';

function* actionWatcher() {
  const pokemonList = yield call(api.getPokemonList, 8);
  const pokemonDetail = yield all(pokemonList.data.results.map(items => {
    return call(api.getPokemonDetail, items.url)
  }));
  const pokemonSpecies = yield all(pokemonDetail.map(items => {
    return call(api.getPokemonDetail, items.data.species.url)
  }));

  yield [
    put({ type: 'GET_ALL_POKEMONS', pokemonList: pokemonList.data.results, pokemonDetail: pokemonDetail, pokemonSpecies: pokemonSpecies, next: pokemonList.data.next, prev: pokemonList.data.previous }),
    put({ type: 'PAGINATE', pokemonList: pokemonList.data.results, pokemonDetail: pokemonDetail, pokemonSpecies: pokemonSpecies, next: pokemonList.data.next, prev: pokemonList.data.previous })
  ];
}

export default actionWatcher;