import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import ModalComponent from './Modal';

export default class CardComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
          modal: false
      };
  }

  handleModal = () => {
    this.setState({ modal: !this.state.modal});
  }

  render() {
    return (
      <div className="width-100">
        <Card>
          <CardImg onClick={this.handleModal} className="c-pointer" top width="100%" src={this.props.detail.data.sprites.front_default} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle>{this.props.species.data.habitat.name}</CardSubtitle>
          </CardBody>
        </Card>
        <ModalComponent species={this.props.species.data} detail={this.props.detail.data} modal={this.state.modal} toggle={this.handleModal} />
      </div>
    );
  }
}