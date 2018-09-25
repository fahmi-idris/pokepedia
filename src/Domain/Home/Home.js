import React, { Component } from 'react'
import { Container, CardGroup, Row, Col } from 'reactstrap';

import Header from '../../Application/Common/Header'
import Box from '../../Application/Common/Card'

export default class Home extends Component {
  render() {
    return (
        <div>
          <Header title="pokepedia"></Header>
          <Container>
              <CardGroup>
                  <Row>
                      <Col md="3" className="d-flex justify-content-center p-2">
                          <Box></Box>
                      </Col>
                  </Row>
              </CardGroup>
          </Container>
        </div>
    );
  }
}