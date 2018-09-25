import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

export default class ModalComponent extends Component {
    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Title</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md="12">
                            <h3>Pokemon Data</h3>
                            <Row>
                                <Col md="12">
                                    <ul>
                                        <li>data</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <h3>Pokemon Stats</h3>
                            <Row>
                                <Col md="12">
                                    <ul>
                                        <li>data</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    }
}