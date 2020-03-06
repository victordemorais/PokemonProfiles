import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import { Page } from './styles';
import { pokeRequestList, selectPoke } from '../../store/actions/poke';
import { Content } from '../../styles/global';
import CardBox from '../../components/CardBox';

class Home extends Component {
  componentDidMount = () => {
    const { loadPokes } = this.props;
    loadPokes(); // load all pokemons
  };

  pressPoke = poke => {
    const { selectedPoke } = this.props;
    selectedPoke(poke); //  poke selected in redux
  };

  render() {
    const { pokeList, state } = this.props;
    console.log(state);
    return (
      <Page>
        <Content>
          <Container>
            <Typography gutterBottom variant="h5" component="h2">
              List of Pokemons, select the favorite and learn more about it.
            </Typography>
            <Grid container spacing={3}>
              {pokeList &&
                pokeList.map(poke => (
                  <Grid key={poke.id} item xs={12} sm={4} md={3}>
                    <CardBox poke={poke} onClick={() => this.pressPoke(poke)} />
                  </Grid>
                ))}
            </Grid>
          </Container>
        </Content>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPokes: () => dispatch(pokeRequestList()),
    selectedPoke: poke => dispatch(selectPoke(poke)),
  };
};
const mapStateToProps = state => {
  return {
    pokeList: state.pokeReducer.pokeList,
    state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
