import React from 'react'; // eslint-disable-line no-unused-vars
import Animation from 'react-addons-css-transition-group'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

import '../css/fade.css';

const Fade = (props) => {
	return (
		<Animation
			component={props.component}
			style={props.style}
			onClick={props.onClick}
			className={props.fadeClass}
			transitionName="fade"
			transitionAppearTimeout={300}
			transitionEnterTimeout={200}
			transitionEnter={true}
			transitionAppear={true}
			transitionLeaveTimeout={200}
			transitionLeave={true}>
			{props.children}
		</Animation>
	);
};

Fade.propTypes = {
	component: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func,
	fadeClass: PropTypes.string,
	children: PropTypes.any.isRequired
};

export default Fade;
