import React from 'react';
import { connect } from 'react-redux';
import { LoadingGif } from './styles';

const Loading = ({ loading }) => {
  if (loading) return <LoadingGif />;
  return <></>;
};

const mapStateToProps = state => ({
  loading: state.pokeReducer.loading,
});

export default connect(mapStateToProps)(Loading);
