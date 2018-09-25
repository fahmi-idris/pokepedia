const HomeReducer = (state = {}, action) => {
  switch (action.type) {
     case 'GET_ALL_POKEMONS':
        return { ...state, pokemonList: action.pokemonList };
     default:
        return state;
   }
};
export default HomeReducer;