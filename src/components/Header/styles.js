import React from 'react';
import styled from 'styled-components';
import logoPokemon from '../../assets/imgs/logo.png';

export const CenterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Logo = () => (
  <CenterLogo>
    <img src={logoPokemon} alt="Logo Pókemon" style={{ height: 150 }} />
  </CenterLogo>
);
