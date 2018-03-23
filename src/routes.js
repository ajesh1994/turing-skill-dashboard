import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home.js';
import searchAndis from './components/searchAndis.js';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/search-andis" component={searchAndis} />
      <Route path="*" exact component={Home} />
    </Switch>
  </BrowserRouter>
);
