import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Image } from './styles';
import { capitalize } from '../../handlers/formatter';

const CardBox = ({ poke, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CardActionArea>
        <Image image={poke.sprites.front_shiny} title="Contemplative Reptile" />
        <CardContent style={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="h2">
            {capitalize(poke.name)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardBox;
