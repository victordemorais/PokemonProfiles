import React from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Home from './screens/Home';
import Poke from './screens/Poke';
import history from './services/history';

export default function Routes() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/poke" component={Poke} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}
