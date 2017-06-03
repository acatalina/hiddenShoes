import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; // eslint-disable-line no-unused-vars

import ProductPage from './ProductPage'; // eslint-disable-line no-unused-vars
import SalesPage from './SalesPage'; // eslint-disable-line no-unused-vars
import Header from './Header'; // eslint-disable-line no-unused-vars
import Menu from './Menu'; // eslint-disable-line no-unused-vars

import DATA from '../../DATA';
import history from '../history';

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<main>
					<Header />
					<Menu />
					<Switch>
						<Route exact path="/" render={() => <SalesPage data={DATA} />} />
						<Route path="/shoes/:id" render={() => <ProductPage data={DATA} />} />
						<Redirect from="*" to="/" />
					</Switch>
				</main>
			</Router>
		);
	}
}

export default App;
