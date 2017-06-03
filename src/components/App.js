import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

import Header from './Header'; // eslint-disable-line no-unused-vars

class App extends Component {
	render() {
		return (
			<main>
				<Header />
				{this.props.children}
			</main>
		);
	}
}

export default App;
