import styled from 'styled-components';
import { CardContent, Typography } from '@material-ui/core';

export const ContentCard = styled(CardContent)`
  display: flex;
  flex-direction: row;
`;

export const ButtonBack = styled.a`
  color: #fff;
  font-weight: bold !important;
  margin-bottom: 10px;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  width: 120px;
`;

export const Image = styled.img`
  display: flex;
  flex-direction: row;
  width: 140px;
  height: 140px;
  background-color: #f9f9f9;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #000;
`;

export const Txt = styled(Typography)`
  font-weight: ${props => (props.bold ? 'bold' : 'regular')} !important;
`;
