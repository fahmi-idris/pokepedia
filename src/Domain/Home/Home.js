import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, CardGroup, Row, Col } from 'reactstrap';

import Header from '../../Application/Common/Header'
import CardComponent from '../../Application/Common/Card'

import { getAllPokemons } from './HomeActions';

class Home extends Component {
  componentDidMount () {
    getAllPokemons()
  }

  render() {
    const { pokemons } = this.props
    if(!pokemons){
        return <div className="loading">Loading...</div>
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
          </Container>
        </div>
    );
  }
}

const mapDispatchToProps = {
  getAllPokemons: getAllPokemons
};

const mapStateToProps = (state) => ({
  pokemons: state.HomeReducer.pokemonList
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)