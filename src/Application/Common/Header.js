import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div style={styles.headerContainer}>
        <div style={styles.headerTitle}>
          {this.props.title}
        </div>
      </div>
    );
  }
}

const styles = {
    headerContainer: {
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgb(183, 183, 183)',
        flexDirection: 'row',
        display: 'flex',
        padding: 20
    },
    headerTitle : {
      fontSize: 20,
      fontWeight: '500',
      textTransform: 'uppercase'
    }
}