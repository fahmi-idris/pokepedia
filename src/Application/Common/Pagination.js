import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { connect } from 'react-redux';
import { getAllPokemons, paginate } from '../../Domain/Home/HomeActions';

class PaginationComponent extends Component {
  constructor (props) {
    super(props)
    this.previousPageTrigger = this.previousPageTrigger.bind(this)
    this.nextPageTrigger = this.nextPageTrigger.bind(this)
  }

  previousPageTrigger () {
    paginate()
  }

  nextPageTrigger () {
    paginate()
  }

  render() {
    return (
      <div>
        <Pagination aria-label="page navigation">
          <PaginationItem>
              <PaginationLink previous onClick={this.previousPageTrigger}/>
          </PaginationItem>
        
          <PaginationItem>
              <PaginationLink next onClick={this.nextPageTrigger}/>
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAllPokemons: getAllPokemons,
  paginate: paginate
};

const mapStateToProps = (state) => ({
  pokemons: state.HomeReducer.pokemonList,
  pokemonsDetail: state.HomeReducer.pokemonDetail,
  pokemonSpecies: state.HomeReducer.pokemonSpecies,
  next: state.HomeReducer.next,
  prev: state.HomeReducer.prev
})

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);