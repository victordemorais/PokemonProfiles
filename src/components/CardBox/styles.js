import React from 'react';
import styled from 'styled-components';

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = ({ image }) => (
  <CenterDiv>
    <img src={image} alt={image} width={120} />
  </CenterDiv>
);
