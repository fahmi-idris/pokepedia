import { put, call } from 'redux-saga/effects';
import * as api from '../Service/API';

function* actionWatcher() {
  const pokemonList = yield call(api.getPokemonList);
  yield put({
    type: 'GET_ALL_POKEMONS',
    pokemonList: pokemonList.data.results
  });
}

export default actionWatcher;