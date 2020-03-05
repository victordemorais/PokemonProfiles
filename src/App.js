import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import Store from './store';

const App = () => (
  <Provider store={Store}>
    <Routes />
  </Provider>
);
export default App;
