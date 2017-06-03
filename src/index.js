import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; // eslint-disable-line no-unused-vars

import App from './components/App'; // eslint-disable-line no-unused-vars
import ProductPage from './components/ProductPage'; // eslint-disable-line no-unused-vars
import SalesPage from './components/SalesPage'; // eslint-disable-line no-unused-vars

import DATA from '../DATA';

ReactDOM.render(
  <App>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <SalesPage data={DATA}/>} />
        <Route path="/shoes/:id" render={() => <ProductPage data={DATA} />}/>
        <Route render={() => <SalesPage data={DATA}/>} />
      </Switch>
    </Router>
  </App>,
  document.getElementById('root')
);
