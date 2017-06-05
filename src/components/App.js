import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; // eslint-disable-line no-unused-vars

import ProductPage from './ProductPage'; // eslint-disable-line no-unused-vars
import SalesPage from './SalesPage'; // eslint-disable-line no-unused-vars
import Header from './Header'; // eslint-disable-line no-unused-vars
import Menu from './Menu'; // eslint-disable-line no-unused-vars

import DATA from '../../DATA';
import history from '../history';

import '../css/app.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggledMenu: false
		};

		this.toggleMenu = this.toggleMenu.bind(this);
	}
	render() {
		return (
			<Router history={history}>
				<main className="main-wrapper">
					<Header />
					<div className="content-wrapper">
						<Menu toggled={this.state.toggledMenu} toggleMenu={this.toggleMenu}/>
						<Switch>
							<Route exact path="/" render={() => <SalesPage data={DATA} />} />
							<Route path="/shoes/:id" render={() => <ProductPage data={DATA} />} />
							<Redirect from="*" to="/" />
						</Switch>
					</div>
				</main>
			</Router>
		);
	}
	toggleMenu() {
		this.setState((prevState) => {
			return {
				toggledMenu: !prevState.toggledMenu
			};
		});
	}
}

export default App;
