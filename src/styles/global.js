import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family:Open Sans, sans-serif;
  }

  html, body, #root{
    min-height: 100%;

  }

  body {
    background: #d0e9ff;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  height: '100vh';
  margin-top: 75px;
`;
