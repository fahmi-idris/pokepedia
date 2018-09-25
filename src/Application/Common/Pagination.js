import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { connect } from 'react-redux';

class PaginationComponent extends Component {
  constructor (props) {
    super(props)
    this.previousPageTrigger = this.previousPageTrigger.bind(this)
    this.nextPageTrigger = this.nextPageTrigger.bind(this)
  }

  previousPageTrigger () {
    let prev = this.props.prev
    this.props.onSetPage(null, prev);
  }

  nextPageTrigger () {
    let next = this.props.next
    this.props.onSetPage(next, null);
  }

  render() {
    return (
      <div>
        <Pagination aria-label="page navigation">
          <PaginationItem>
              <PaginationLink previous onClick={this.nextPageTrigger}/>
          </PaginationItem>
        
          <PaginationItem>
              <PaginationLink next onClick={this.previousPageTrigger}/>
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSetPage: (next, prev) => dispatch({
    type: 'SET_PAGE',
    nextPage: next,
    previousPage: prev
  })
});

export default connect(null, mapDispatchToProps)(PaginationComponent);