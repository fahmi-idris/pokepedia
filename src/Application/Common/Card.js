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
      <div>
        <Card>
          <CardImg onClick={this.handleModal} className="c-pointer" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle>Habitat</CardSubtitle>
          </CardBody>
        </Card>
        <ModalComponent modal={this.state.modal} toggle={this.handleModal} />
      </div>
    );
  }
}