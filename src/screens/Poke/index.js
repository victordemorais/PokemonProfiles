import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { Content } from '../../styles/global';
import history from '../../services/history';

export class Poke extends Component {
  componentDidMount = () => {
    const { selected } = this.props;
    if (!selected) history.push('/');
  };

  render() {
    return (
      <Content>
        <Container>
          <h1>ListPokes</h1>
          <h1>ListPokes</h1>
          <h1>ListPokes</h1>
          <h1>ListPokes</h1>
          <h1>ListPokes</h1>
          <h1>ListPokes</h1>
        </Container>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.pokeReducer.selected,
});

export default connect(mapStateToProps)(Poke);
