import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

export default class ModalComponent extends Component {
    render() {
        console.log(this.props)
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>
                    {this.props.detail.name}
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md="12" className="modal-image-container">
                            <img src={this.props.detail.sprites.front_default} className="modal-image"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <h4>Description</h4>
                            <p>
                                lorem ipsum dolor sit amet
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Row>
                                <Col md="3">
                                    <h5>Color</h5>
                                    {this.props.species.color.name}
                                </Col>
                                <Col md="3">
                                    <h5>Shapes</h5>
                                    {this.props.species.shape.name}
                                </Col>
                                <Col md="3">
                                    <h5>Weight</h5>
                                    {this.props.detail.weight}
                                </Col>
                                <Col md="3">
                                    <h5>Height</h5>
                                    {this.props.detail.height}
                                </Col>
                            </Row>
                            <Row className="margin-top-25">
                                <Col md="3">
                                    <h5>Habitat</h5>
                                    {this.props.species.habitat.name}
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