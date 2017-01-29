import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App/index';
import HomePage from './containers/HomePage/index';
import AutorPage from './containers/AutorPage/index';
import AutorPageItem from './containers/AutorPageItem/index';
import BookPage from './containers/BookPage/index';
import BookPageItem from './containers/BookPageItem/index';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/autor" component={AutorPage} />
    <Route path="/autor/:id" component={AutorPageItem} />
    <Route path="/book" component={BookPage} />
    <Route path="/book/:id" component={BookPageItem} />

  </Route>
);
