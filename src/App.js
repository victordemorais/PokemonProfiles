import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import Store from './store';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import Loading from './components/Loading';

const App = () => (
  <Provider store={Store}>
    <Loading />
    <Header />
    <Routes />
    <GlobalStyle />
  </Provider>
);
export default App;
