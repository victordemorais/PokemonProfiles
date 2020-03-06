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
    background: url('https://images4.alphacoders.com/574/thumb-1920-574726.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  height: '100vh';
  margin-top: 25px;
`;
