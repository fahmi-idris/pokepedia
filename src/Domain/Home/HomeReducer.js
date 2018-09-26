const HomeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_POKEMONS':
        return { ...state, pokemonList: action.pokemonList, pokemonDetail: action.pokemonDetail, pokemonSpecies: action.pokemonSpecies, next: action.next, prev: action.prev };
    case 'PAGINATE':
        return { ...state, pokemonList: action.pokemonList, pokemonDetail: action.pokemonDetail, pokemonSpecies: action.pokemonSpecies, next: action.next, prev: action.prev };
    default:
        return state;
   }
};
export default HomeReducer;