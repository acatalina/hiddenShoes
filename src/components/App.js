import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

class App extends Component {
	render() {
		return (
			<main>
				<div>Hello world!</div>
				{this.props.children}
			</main>
		);
	}
}

export default App;
