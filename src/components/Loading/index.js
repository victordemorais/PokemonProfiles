import React from 'react';
import { connect } from 'react-redux';

const Loading = ({ loading }) => {
  if (loading) return <div style={{ marginTop: 120 }}>Carregando</div>;
  return <></>;
};

const mapStateToProps = state => ({
  loading: state.pokeReducer.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
