const HomeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_POKEMONS':
        return { ...state, pokemonList: action.pokemonList, next: action.next, prev: action.prev };
    case 'SET_PAGE':
        return { ...state, nextPage: action.nextPage, previousPage: action.previousPage };
    default:
        return state;
   }
};
export default HomeReducer;