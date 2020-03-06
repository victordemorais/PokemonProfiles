import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import { Page, ButtonPaginate } from './styles';
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

  previousPage = () => {
    const { loadPokes, pokeList } = this.props;
    loadPokes(pokeList.previous); // Load Previous Page pokemons
  };

  nextPage = () => {
    const { loadPokes, pokeList } = this.props;
    loadPokes(pokeList.next); // Load Next Page pokemons
  };

  render() {
    const { pokeList } = this.props;
    return (
      <Page>
        <Content>
          <Container>
            <Typography gutterBottom variant="h5" component="h2">
              List of Pokemons, select the favorite and learn more about it.
            </Typography>
            <Grid container spacing={3}>
              {pokeList &&
                pokeList.allPokes.map(poke => (
                  <Grid key={poke.id} item xs={12} sm={4} md={3}>
                    <CardBox poke={poke} onClick={() => this.pressPoke(poke)} />
                  </Grid>
                ))}
            </Grid>

            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <ButtonPaginate
                variant="contained"
                color="primary"
                onClick={this.previousPage}
                disabled={!pokeList || !pokeList.previous}
              >
                Previous
              </ButtonPaginate>
              <ButtonPaginate
                variant="contained"
                color="primary"
                onClick={this.nextPage}
                disabled={!pokeList || !pokeList.next}
              >
                Next
              </ButtonPaginate>
            </Grid>
          </Container>
        </Content>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPokes: url => dispatch(pokeRequestList(url)),
    selectedPoke: poke => dispatch(selectPoke(poke)),
  };
};
const mapStateToProps = state => {
  return {
    pokeList: state.pokeReducer.pokeList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
