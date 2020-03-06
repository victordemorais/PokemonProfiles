import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card, Grid, Chip } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import { Content } from '../../styles/global';
import history from '../../services/history';
import { ContentCard, Image, Txt, ButtonBack } from './styles';
import { capitalize } from '../../handlers/formatter';

export class Poke extends Component {
  backRoute = () => {
    history.push('/');
  };

  renderText = (title, subTitle) => (
    <>
      <Txt bold>{capitalize(title)}:</Txt>
      <Txt>{subTitle}</Txt>
    </>
  );

  renderChip = label => (
    <Chip label={label} color="primary" style={{ margin: 2 }} />
  );

  render() {
    const { selected } = this.props;
    if (!selected) {
      history.push('/');
      return <></>;
    }
    return (
      <Content>
        <Container>
          <ButtonBack onClick={this.backRoute}>
            <ArrowBackIos style={{ color: '#fff', marginBottom: 3 }} />
            Voltar
          </ButtonBack>
          <Card>
            <ContentCard>
              <Grid
                md={2}
                alignContent="center"
                justify="center"
                alignItems="center"
                style={{ display: 'flex' }}
              >
                <Image src={selected.sprites.front_default} />
              </Grid>
              <Grid md={6}>
                {this.renderText('Name', selected.name)}
                {this.renderText('Base Experience', selected.base_experience)}
                <Txt bold>Types</Txt>
                {selected.types.map(({ type }) => this.renderChip(type.name))}
              </Grid>
              <Grid md={6}>
                <Txt bold>Abilities:</Txt>
                {selected.abilities.map(({ ability }) =>
                  this.renderChip(ability.name)
                )}
                <Txt bold>Statistics:</Txt>
                {selected.stats.map(({ stat, base_stat }) => (
                  <Txt>{`${stat.name} - ${base_stat}`}</Txt>
                ))}
              </Grid>
            </ContentCard>
          </Card>
        </Container>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.pokeReducer.selected,
});

export default connect(mapStateToProps)(Poke);
