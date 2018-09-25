import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, CardGroup, Row, Col } from 'reactstrap';

import Header from '../../Application/Common/Header';
import CardComponent from '../../Application/Common/Card';
import PaginationComponent from '../../Application/Common/Pagination';
import Loading from '../../Application/Common/Loading';

import { getAllPokemons } from './HomeActions';

class Home extends Component {
  componentDidMount () {
    getAllPokemons()
  }

  render() {
    const { pokemons, prev, next } = this.props
    if(!pokemons){
        return <Loading/>
    }
    return (
        <div>
          <Header title="pokepedia"></Header>
          <Container className="margin-top-25">
              <CardGroup>
                  <Row>
                      {pokemons.map(items => (
                          <Col md="3" className="d-flex justify-content-center p-2" key={items.name}>
                              <CardComponent {...items}></CardComponent>
                          </Col>
                      ))}
                  </Row>
              </CardGroup>
              <PaginationComponent next={next} previous={prev}></PaginationComponent>
          </Container>
        </div>
    );
  }
}

const mapDispatchToProps = {
  getAllPokemons: getAllPokemons
};

const mapStateToProps = (state) => ({
  pokemons: state.HomeReducer.pokemonList,
  next: state.HomeReducer.next,
  prev: state.HomeReducer.prev
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)