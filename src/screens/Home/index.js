import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pokeRequestList } from '../../store/actions/poke';

class Home extends Component {
  componentDidMount = () => {
    const { loadPokes } = this.props;
    loadPokes(); // load all pokemons
  };

  render() {
    return <h1>HomePage</h1>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPokes: () => dispatch(pokeRequestList()),
  };
};
const mapStateToProps = state => {
  return {
    pokeList: state.pokeReducer.pokeList,
  };
};

Home.propTypes = {
  loadPokes: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
